import { useEffect, useRef } from "react";

const Player = ({ source }) => {
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
      className="m-auto dark:opacity-70 w-[100%] transition duration-300 ease-in-out my-2"
      onLoadedMetadata={() => {
        if (audioRef.current) {
          audioRef.current.volume = 0.3;
        }
      }}
    >
      <source src={`/assets/question-files/${source}`} type="audio/mpeg" />
    </audio>
  );
};
export default Player;
