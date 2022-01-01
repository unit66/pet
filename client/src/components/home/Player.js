import React, { useEffect, useRef, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

const Player = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const player = useRef(null);
    const timerRef = useRef();

    const play = () => {
        setIsPlaying(false);
        player.current.audioEl.current.currentTime = 0;
        player.current.audioEl.current.play();
        setIsPlaying(true);
    }
    const stop = () => {
        setIsPlaying(false);
        player.current.audioEl.current.pause();
        player.current.audioEl.current.currentTime = 0;
        setCurrentTime(0);
    }
    useEffect(() => {
        if (isPlaying) {
            timerRef.current = setInterval(() => {
                const t = parseInt(player.current.audioEl.current.currentTime, 10);
                if (t >= props.endTime) {
                    stop();
                }
                setCurrentTime(t);
            }, 100);
        } else {
            clearInterval(timerRef.current);
            setCurrentTime(0);
        }
    }, [isPlaying])
    return (
        <div key={props.src}>
            <ReactAudioPlayer
                src={`${props.src}`}
                onPause={() => stop()}
                ref={player}
            />
            <button
                className="playButton"
                onClick={() => { 
                    if (isPlaying) {
                        stop()
                    } else {
                        play() 
                    }
                }}
                disabled={props.src === ''}
            >
                { isPlaying ? currentTime === 0 ? 'play' : currentTime : 'play' }
            </button>
        </div>
    );
};

export default Player;
