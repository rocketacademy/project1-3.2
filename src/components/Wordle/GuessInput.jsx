import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { letters } from "../../../utilities";

const GuessInput = ({ handleSubmitGuess, gameState }) => {
  // state to hold user's guess
  const [tentativeGuess, setTentativeGuess] = useState("");

  // state to hold all letters
  const [allLetters, setAllLetters] = useState(letters);

  // state to hold guessed letters
  const [guessedLetters, setGuessedLetters] = useState([]);

  const updateGuessedLetters = (guess) => {
    const guessedLettersArray = guess.split("");
    const nextGuessedLetters = [...guessedLetters, ...guessedLettersArray];
    setGuessedLetters(nextGuessedLetters);
    const remaining = allLetters.filter((x) => !nextGuessedLetters.includes(x));
    setAllLetters(remaining);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitGuess(tentativeGuess);
    updateGuessedLetters(tentativeGuess);
    setTentativeGuess("");
  };

  // Autofocus on input field when game status is guess
  const textFieldRef = useRef(null);
  useEffect(() => {
    if (gameState === "guess" && textFieldRef.current) {
      textFieldRef.current.focus();
    }
  }, [gameState]);

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
      <div
        className={`mt-4 max-w-[25ch] mx-auto leading-7 ${
          gameState !== "guess" ? "text-gray-600" : "text-gray-200"
        }`}
      >
        <span
          className={gameState !== "guess" ? "text-gray-600" : "text-gray-400"}
        >
          Remaining letters:
        </span>
        <br />
        {allLetters.join(" ")}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row lg:justify-between"
      >
        <input
          id="guess-input"
          value={tentativeGuess}
          type="text"
          ref={textFieldRef}
          onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
          // validation for 5 letter word using Regular Expressions
          pattern="[a-zA-Z]{5}"
          title="Enter a 5 letter word"
          required
          disabled={gameState !== "guess"}
          className={`py-2 px-4 rounded-md mt-4 border-2 border-gray-700 focus:outline-none focus:border-gray-500 bg-slate-800 md:flex-grow ${
            gameState !== "guess" ? `cursor-not-allowed opacity-30` : undefined
          }`}
          autoFocus
        />
        <button
          type="submit"
          className={`flex-grow py-2 px-6 lg:ml-8 rounded-md mt-4 mb-4 lg:mb-0 transition duration-300 ease-in-out bg-sky-700 ${
            gameState !== "guess"
              ? `cursor-not-allowed opacity-20 hover:bg-`
              : `cursor-pointer hover:bg-sky-800`
          }`}
          disabled={gameState !== "guess"}
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
};
export default GuessInput;
