import { useRef } from "react";

const Player = ({ source }) => {
  // Set default audio volume to 50%
  const audioRef = useRef(null);

  return (
    <audio
      ref={audioRef}
      controls
      className="m-auto opacity-50 w-[100%] hover:opacity-80 transition duration-300 ease-in-out my-2"
      autoPlay
      onLoadedMetadata={() => {
        if (audioRef.current) {
          audioRef.current.volume = 0.5;
        }
      }}
    >
      <source src={`../../media/${source}`} type="audio/mpeg" />
    </audio>
  );
};
export default Player;
