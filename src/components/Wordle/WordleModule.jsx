import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import WORDS from "../../words";
import { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../../utilities";
import WonBanner from "./WonBanner";
import LostBanner from "./LostBanner";

// Randomly select a word and set it to state
const answer = WORDS[Math.floor(Math.random() * WORDS.length)];
console.log("answer", answer);

const WordleModule = () => {
  const [gameStatus, setGameStatus] = useState("guess"); // running, won, lost

  // state to hold user's guesses
  const [guesses, setGuesses] = useState([]);

  const handleSubmitGuess = (tentativeGuess) => {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  return (
    <div>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </div>
  );
};
export default WordleModule;
