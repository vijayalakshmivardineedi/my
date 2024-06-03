import React, { useRef, useState, useEffect } from 'react';
import './Home.css';

const MediaCarousel = ({ mediaSrcs = [] }) => {
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const mediaRef = useRef(null);

    useEffect(() => {
        if (mediaSrcs.length === 0) return;

        const handleEnded = () => {
            setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % mediaSrcs.length);
            setPaused(true);
        };

        const mediaElement = mediaRef.current;
        if (mediaElement) {
            if (mediaElement.tagName === 'VIDEO') {
                mediaElement.addEventListener('ended', handleEnded);
            } else {
                const imageDuration = 3000; // 3 seconds for images
                const timer = setTimeout(handleEnded, imageDuration);
                return () => clearTimeout(timer);
            }
            return () => {
                if (mediaElement.tagName === 'VIDEO') {
                    mediaElement.removeEventListener('ended', handleEnded);
                }
            };
        }
    }, [currentMediaIndex, mediaSrcs]);

    const togglePlayPause = () => {
        const mediaElement = mediaRef.current;
        if (mediaElement) {
            if (paused) {
                mediaElement.play();
            } else {
                mediaElement.pause();
            }
            setPaused(!paused);
        }
    };

    if (mediaSrcs.length === 0) {
        return <div>No media available</div>;
    }

    const isVideo = mediaSrcs[currentMediaIndex].endsWith('.mp4');

    return (
        <div className="video-container">
            {isVideo ? (
                <video
                    ref={mediaRef}
                    key={mediaSrcs[currentMediaIndex]}
                    src={mediaSrcs[currentMediaIndex]}
                    controls
                    autoPlay
                    className='video'
                    onClick={togglePlayPause}
                />
            ) : (
                <img
                    ref={mediaRef}
                    key={mediaSrcs[currentMediaIndex]}
                    src={mediaSrcs[currentMediaIndex]}
                    alt={`media-${currentMediaIndex}`}
                    className='video'
                />
            )}
        </div>
    );
};

export default MediaCarousel;
