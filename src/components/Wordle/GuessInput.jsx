import { useState } from "react";
import { motion } from "framer-motion";
// import { letters } from "../../../utilities";

const GuessInput = ({ handleSubmitGuess, gameStatus }) => {
  // state to hold user's guess
  const [tentativeGuess, setTentativeGuess] = useState("");

  // // state to hold guessed letters
  // const [guessedLetters, setGuessedLetters] = useState([]);

  // const updateGuessedLetters = (guess) => {
  //   const nextGuessedLetters = [...guessedLetters, ...guess];
  //   console.log(`next`, nextGuessedLetters);
  //   // const updatedLetters = guessedLetters.map((letter) =>
  //   //   guessed.includes(letter) ? "" : letter
  //   // );
  //   // console.log(updatedLetters);
  //   // console.log(updatedLetters.join(""));
  //   // setGuessedLetters('updatedLetters');
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
    // updateGuessedLetters(tentativeGuess);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {/* <div>{123}</div> */}
      <form onSubmit={handleSubmit} className="flex justify-between">
        <input
          id="guess-input"
          value={tentativeGuess}
          type="text"
          onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
          // validation for 5 letter word using Regular Expressions
          pattern="[a-zA-Z]{5}"
          title="Enter a 5 letter word"
          required
          disabled={gameStatus === "lost"}
          className="py-2 px-4 rounded-md mt-4 border-2 border-gray-700 focus:outline-none focus:border-gray-500 bg-slate-800 md:flex-grow"
          autoFocus
        />
        <button
          type="submit"
          className="py-2 px-6 ml-8 rounded-md mt-4 hover:bg-sky-800 transition duration-300 ease-in-out bg-sky-700 md:flex-grow"
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
};
export default GuessInput;
