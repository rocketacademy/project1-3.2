import { useState } from "react";

const GuessInput = ({ handleSubmitGuess }) => {
  // state to hold user's guess
  const [tentativeGuess, setTentativeGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        value={tentativeGuess}
        type="text"
        onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
        // validation for 5 letter word using Regular Expressions
        pattern="[a-zA-Z]{5}"
        title="Enter a 5 letter word"
        required
      />
    </form>
  );
};
export default GuessInput;
