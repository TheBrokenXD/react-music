import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStepForward, faStepBackward, faExpand, faStream } from '@fortawesome/free-solid-svg-icons';

const Player = () => {
    return (
        <div className="player">
            <div className="inputs">
                <input type="range" />
                <p>End time</p>
            </div>
            <div className="controls">
                <div>
                    <h3>author</h3>
                </div>
                <div>
                    <FontAwesomeIcon className="left" size="2x" icon={faStepBackward} />
                    <FontAwesomeIcon className="play" size="2x" icon={faPlay} />                    
                    <FontAwesomeIcon className="right" size="2x" icon={faStepForward} />
                </div>
                <div>
                    <FontAwesomeIcon className="full" size="2x" icon={faExpand} />
                    <FontAwesomeIcon className="queue" size="2x" icon={faStream} />
                </div>
            </div>
        </div>
    )
}

export default Player
