import React, { useState } from 'react';
import error from '../../assets/error.mp4'

function Video() {
    const [showVideo, setShowVideo] = useState(false);

    const handleClick = () => {
        setShowVideo(!showVideo);
    };

    return (
        <div className="App">
            <button onClick={handleClick}>
                click here to show video
                {showVideo ? 'Hide Video' : 'Show Video'}
            </button>
            {showVideo && (
                <div className="video-container">
                    <video width="400" controls>
                        <source src={error} type="video/mp4" />
                        Your browser does not support HTML video.
                    </video>
                </div>
            )}
        </div>
    );
}

export default Video;
