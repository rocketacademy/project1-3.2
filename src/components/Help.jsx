// https://ahmadrosid.com/blog/react-tailwind-tooltip

import { FaCircleInfo } from "react-icons/fa6";

const Help = () => {
  return (
    <div className="group fixed bottom-8 right-8 opacity-20 hover:opacity-80 transition duration-300 ease-in-out">
      <FaCircleInfo size={32} />
      <div className="absolute -top-32 right-16 scale-0 transition-all rounded bg-gray-600 w-64 p-4 text-sm text-gray-100 group-hover:scale-100 text-left">
        Answer 2 trivia questions to earn a guess at the mystery word <br />
        <br />You lose the game if you lose all 4 lives or exceed 6 guesses
      </div>
    </div>
  );
};
export default Help;
