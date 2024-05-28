import { useState, useRef } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  function handleClick() {
    setIsPlaying(!isPlaying);

    if (!isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  return (
    <>
      <button onClick={handleClick}>{isPlaying ? 'Pause' : 'Play'}</button>
      <video
        loop
        ref={videoRef}
        width="250"
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      ></video>
    </>
  );
}
