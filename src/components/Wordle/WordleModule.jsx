import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import WORDS from "../../words";
import { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../settings";
import WonBanner from "./WonBanner";
import LostBanner from "./LostBanner";
import { motion } from "framer-motion";

// Play sound effects on correct and wrong answers
const gameWonSound = new Audio("/assets/gamewin.mp3");
const gameOverSound = new Audio("/assets/gameover.mp3");

// Randomly select a word and set it to state
const answer = WORDS[Math.floor(Math.random() * WORDS.length)];
console.log("answer", answer);

const WordleModule = ({ gameState, setGameState }) => {
  // state to hold user's guesses
  const [guesses, setGuesses] = useState([]);

  const handleSubmitGuess = (tentativeGuess) => {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
    if (tentativeGuess.toUpperCase() === answer) {
      setGameState("won");
      gameWonSound.play();
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState("lost");
      gameOverSound.play();
    } else {
      setGameState("quiz");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.7,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="w-[22rem] mt-4 lg:w-[40%] lg:mt-0"
    >
      <GuessResults guesses={guesses} answer={answer} />
      {gameState === "guess" && (
        <GuessInput
          handleSubmitGuess={handleSubmitGuess}
          gameStatus={gameState}
        />
      )}
      {gameState === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameState === "lost" && <LostBanner answer={answer} />}
    </motion.div>
  );
};
export default WordleModule;
