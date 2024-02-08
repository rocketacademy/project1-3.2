import { FaHeart } from "react-icons/fa";

const HeartContainer = ({ lives }) => {
  return (
    <div className="flex items-center p-1">
      {Array.from({ length: lives }).map((_, index) => (
        <FaHeart
          key={index}
          className="fade text-red-600 mx-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          size={20}
        />
      ))}
    </div>
  );
};
export default HeartContainer;
