import { useState } from "react";

const GuessInput = ({ handleSubmitGuess, gameStatus }) => {
  // state to hold user's guess
  const [tentativeGuess, setTentativeGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  };

  return (
    <form onSubmit={handleSubmit} className="">
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
        className="py-2 px-4 rounded-md mt-4 border-2 border-gray-700 focus:outline-none focus:border-gray-500 bg-slate-800"
        autoFocus
      />
      <button
        type="submit"
        className="py-2 px-4 ml-8 rounded-md mt-4 hover:bg-sky-800 transition duration-300 ease-in-out bg-sky-700"
      >
        Submit Guess
      </button>
    </form>
  );
};
export default GuessInput;
