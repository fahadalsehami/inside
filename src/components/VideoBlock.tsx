import React, { useEffect, useRef } from 'react';

const VideoBlock: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        navigator.mediaDevices
            .getUserMedia({ video: true, audio: true })
            .then((stream) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                }
            })
            .catch((err) => console.error('Error accessing media devices:', err));
    }, []);

    return (
        <div style={{ width: '320px', height: '240px', border: '2px solid #000' }}>
            <video ref={videoRef} style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default VideoBlock;
