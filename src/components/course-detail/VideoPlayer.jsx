import { useRef, useState, useEffect } from "react";

export default function CustomVideoPlayer({src}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

//   const togglePlay = () => {
//     const video = videoRef.current;
//     if (video.paused) {
//       video.play();
//     } else {
//       video.pause();
//     }
//   };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-black rounded overflow-hidden">
      <video 
        ref={videoRef} 
        className="w-full aspect-video" 
        preload="metadata"
        controls // Added native video controls
      >
        {/* https://i.imgur.com/bkz3hIJ.mp4 */}
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* <div className="bg-gray-900 p-4 flex justify-between items-center text-white">
        <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
      </div> */}
    </div>
  );
}