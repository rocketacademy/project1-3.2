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

const WordleModule = ({ gameState, setGameState }) => {
  // state to hold user's guesses
  const [guesses, setGuesses] = useState([]);

  const handleSubmitGuess = (tentativeGuess) => {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
    if (tentativeGuess.toUpperCase() === answer) {
      setGameState("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState("lost");
    } else {
      setGameState("quiz");
    }
  };

  return (
    <div
      className={`w-[80%] mr-12 opacity-${gameState === "quiz" ? "20" : "100"}`}
    >
      <GuessResults guesses={guesses} answer={answer} />
      {gameState === "guess" && (
        <GuessInput
          handleSubmitGuess={handleSubmitGuess}
          gameStatus={gameState}
        />
      )}
      {gameState === "quiz" && <p>Quiz state now.</p>}
      {gameState === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameState === "lost" && <LostBanner answer={answer} />}
    </div>
  );
};
export default WordleModule;
