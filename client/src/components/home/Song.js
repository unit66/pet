import React, { useState } from 'react';

const Song = (props) => {
    const [showAuthor, setShowAuthor] = useState(false);
    const [showName, setShowName] = useState(false);
    const [time, setTime] = useState(0);
    const [solved, setSolved] = useState(false);
    const times = [
        1,
        3,
        5,
        7,
        10,
        15,
        30,
        45,
        60,
        90
    ];

    const changeTime = () => {
        const nextTime = times[times.indexOf(time) + 1] || 1;
        setTime(nextTime);
        props.setSrc(`songs/${props.author}/${props.name}/90.mp3`);
        props.setEndTime(nextTime);
    }

    return (
        <div className={`song ${solved && 'solved'}`}>

            { !solved && (
                <>
                    <h6>{props.index}.</h6>
                    <h1>
                        <span onClick={() => setShowAuthor(!showAuthor)}>
                            { showAuthor ? props.author : '*****' }
                        </span>
                    </h1>
                    <small>-</small>
                    <h2>
                        <span onClick={() => setShowName(!showName)}>
                            { showName ? props.name : '*****' }
                        </span>
                    </h2>
                </>
            ) }
            { solved && (
                <>
                    <h3>{props.index}. </h3>
                    <span onClick={() => setSolved(!solved)}>SOLVED</span>
                </>
            )}
            {/* <h5 onClick={() => {props.deleteSong()}}>удалить</h5> */}
            <br/>
            {/*{ showAuthor && showName && (*/}
            {/*    <>*/}
            {/*        <iframe width="560" height="315" src={`${props.source.replace('watch?v=', 'embed/')}?start=${props.offset}&autoplay=1`} allow="autoplay" frameBorder="0" allowFullScreen />*/}
            {/*        <br/>*/}
            {/*    </>*/}
            {/*) }*/}
            { time === 0 && !solved && (
            <>
                <span onClick={changeTime} style={{"color":"#95a3b3", "cursor": "pointer"}}>PLAY</span>
                <br />
            </>
            )}
            { time !== 0 && !solved && (
                <>
                    <b><span style={{"color":"#69b593"}}>{ time }</span> sec - </b>
                    <span onClick={changeTime} style={{"color":"#ff3838", "cursor": "pointer"}}>more</span>
                    <br />
                    <span className="not-solved" onClick={() => setSolved(!solved)}>solved</span>
                    <br />
                </>
            )}
            <hr/>
        </div>
    );
};

export default Song;
