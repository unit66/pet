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

    const changeTime = (nextTime) => {
        //const nextTime = times[times.indexOf(time) + 1] || 1;
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
                        <span onDoubleClick={() => setShowAuthor(!showAuthor)}>
                            { showAuthor ? props.author : '☆☆☆☆☆' }
                        </span>
                    </h1>
                    <small>-</small>
                    <h2>
                        <span onDoubleClick={() => setShowName(!showName)}>
                            { showName ? props.name : '☆☆☆☆☆' }
                        </span>
                    </h2>
                </>
            ) }
            { solved && (
                <>
                    <h3>{props.index}. </h3>
                    <span onClick={() => setSolved(!solved)}>⭐⭐⭐⭐⭐ УГАДАНО!!! ⭐⭐⭐⭐⭐</span>
                </>
            )}
            { props.editMode && (
                <h5 onClick={() => {props.deleteSong()}}>удалить</h5>
            ) }
            <br/>
            {/*{ showAuthor && showName && (*/}
            {/*    <>*/}
            {/*        <iframe width="560" height="315" src={`${props.source.replace('watch?v=', 'embed/')}?start=${props.offset}&autoplay=1`} allow="autoplay" frameBorder="0" allowFullScreen />*/}
            {/*        <br/>*/}
            {/*    </>*/}
            {/*) }*/}
            { time === 0 && !solved && (
            <>
                <span onClick={() => changeTime(1)} style={{"color":"#95a3b3", "cursor": "pointer"}}>PLAY</span>
                <br />
            </>
            )}
            { time !== 0 && !solved && (
                <>
                    <div className='times'>
                        {
                            times.map(timeValue => (<span onClick={() => changeTime(timeValue)} className={time === timeValue ? 'currentTime' : '' }>{ timeValue }</span>))
                        }
                    </div>
                    <span className="not-solved" onClick={() => setSolved(!solved)}>угадано</span>
                </>
            )}
            <hr/>
        </div>
    );
};

export default Song;
