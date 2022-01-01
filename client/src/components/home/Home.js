import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Player from './Player';
import { getDataTree, addSong, deleteSong } from '../../redux/home/home';
import Song from './Song';

const Home = () => {
    const dispatch = useDispatch();
    const songs = useSelector(state => state.home.dataTree);
    const pending = useSelector(state => state.home.pending);
    const [src, setSrc] = useState('');
    const [endTime, setEndTime] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const [newSong, setNewSong] = useState({
        source: '',
        author: '',
        song: '',
        offset: 0
    });
    const [players, setPlayers] = useState([
        // {name: 'Слава', score: 0},
        // {name: 'Алёна', score: 0},
        // {name: 'Надя', score: 0},
        // {name: 'Никита', score: 0},
    ]);
    const [newPlayer, setNewPlayer] = useState('');

    const cantSubmit = newSong.source === '' || newSong.author === '' || newSong.song === '';

    const emmitAddSong = () => {
        dispatch(addSong(newSong));
        setNewSong({
            source: '',
            author: '',
            song: '',
            offset: 0
        });
    };

    const emmitDeleteSong = (song) => {
        dispatch(deleteSong(song));
    };

    useEffect(() => {
        dispatch(getDataTree());
    }, []);

    const sortByScore = (a, b) => {
        if (parseInt(a.score) > parseInt(b.score)) {
            return -1;
        }
        if (parseInt(a.score) < parseInt(b.score)) {
            return 1;
        }
        return 0;
    }

    return (
        <section className="wrapper">
            { pending && (
                <div className="pending">
                    <img src="img/loader.gif" alt=""/>
                </div>
            ) }
            <section className="players">
                { players.map((player, index) => (
                    <div className={`player${index === 0 ? ' leader' : ''}`}>
                        <span>{ player.name }</span>
                        <input type="number" value={player.score} onChange={(e) => {
                            const editPlayers = players.map(pl => {
                                if (pl.name !== player.name) return pl;
                                return {
                                    name: pl.name,
                                    score: e.target.value
                                }
                            })
                            setPlayers(editPlayers.sort(sortByScore));
                        }}/>
                    </div>
                )) }
                <div className="addPlayers">
                    <input type="text" value={newPlayer} onChange={e => setNewPlayer(e.target.value)}/>
                    <button className="add" onClick={() => {
                        setPlayers([...players, { name: newPlayer, score: 0 }])
                        setNewPlayer('');
                    }}>+</button>
                </div>
                <hr/>
            </section>
            <section className="content">
                {/* <h4 onClick={() => setShowForm(true)}>добавить песню</h4> */}
                <div className={`form ${showForm && 'open'}`}>
                    <div className="formWrapper">
                        <span onClick={() => setShowForm(!showForm)}>закрыть</span>
                        <label htmlFor="source">URL: </label>
                        <input id="source" type="text" value={ newSong.source } onChange={ (e) => setNewSong( {...newSong, source: e.target.value}) }/>
                        <label htmlFor="author">Автор: </label>
                        <input id="author" type="text" value={ newSong.author } onChange={ (e) => setNewSong( {...newSong, author: e.target.value}) } />
                        <label htmlFor="song">Песня: </label>
                        <input id="song" type="text" value={ newSong.song } onChange={ (e) => setNewSong( {...newSong, song: e.target.value}) } />
                        <label htmlFor="offset">Отступ: </label>
                        <input id="offset" type="number" value={ newSong.offset } onChange={ (e) => setNewSong( {...newSong, offset: e.target.value}) } />
                        <button onClick={() => { emmitAddSong() }} disabled={cantSubmit}> Добавить песню </button>
                    </div>
                </div>
                <Player src={src} endTime={endTime} />
                <hr />
                <div className="songs">
                    { songs.map((song, index) => (
                        <Song
                            key={`${ song.author } - ${ song.name }`}
                            author={song.author}
                            name={song.song}
                            source={song.source}
                            offset={song.offset}
                            index={index + 1}
                            deleteSong={() => emmitDeleteSong(song)}
                            setSrc={setSrc}
                            setEndTime={setEndTime}
                        />
                    ))
                    }
                </div>
            </section>
        </section>
    );
};

export default Home;
