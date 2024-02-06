import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import WORDS from "../../words";
import { useState } from "react";

// Randomly select a word and set it to state
const answer = WORDS[Math.floor(Math.random() * WORDS.length)];
console.log("answer", answer);

const WordleModule = () => {
  // state to hold user's guesses
  const [guesses, setGuesses] = useState([]);

  const handleSubmitGuess = (tentativeGuess) => {
    setGuesses([...guesses, tentativeGuess]);
  };

  return (
    <div>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </div>
  );
};
export default WordleModule;
