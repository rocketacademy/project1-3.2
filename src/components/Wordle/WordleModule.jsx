import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import WORDS from "../../words";
import { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../../utilities";
import WonBanner from "./WonBanner";
import LostBanner from "./LostBanner";

// Play sound effects on correct and wrong answers
const gameWonSound = new Audio("../../public/media/gamewin.mp3");
const gameOverSound = new Audio("../../public/media/gameover.mp3");

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

  const setOpacity = () => {
    if (gameState === "quiz") {
      return "opacity-30";
    } else {
      return "opacity-100";
    }
  };

  return (
    <div className={`w-[30rem] mr-12 ${setOpacity()}`}>
      <GuessResults guesses={guesses} answer={answer} />
      {gameState === "guess" && (
        <GuessInput
          handleSubmitGuess={handleSubmitGuess}
          gameStatus={gameState}
        />
      )}
      {gameState === "quiz" && (
        <div className="text-xl mt-8">
          Answer 2 questions to guess the secret word ➡️
        </div>
      )}
      {gameState === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameState === "lost" && <LostBanner answer={answer} />}
    </div>
  );
};
export default WordleModule;
