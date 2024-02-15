import { useEffect, useRef } from "react";

const Player = ({ source }) => {
  // Set default audio volume to 50%
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [source]);
  
  return (
    <audio
      ref={audioRef}
      controls
      className="m-auto opacity-50 w-[100%] hover:opacity-80 transition duration-300 ease-in-out my-2"
      onLoadedMetadata={() => {
        if (audioRef.current) {
          audioRef.current.volume = 0.3;
        }
      }}
    >
      <source src={`/src/assets/question-soundbites/${source}`} type="audio/mpeg" />
    </audio>
  );
};
export default Player;
