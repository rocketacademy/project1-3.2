import "./App.css";
import QuizModule from "./components/QuizModule";
import Title from "./components/Title";
import { useState } from "react";

function App() {
  const [gameState, setGameState] = useState("guess"); // quiz, guess, win, lose

  // Use state to store no. of lives
  const [lives, setLives] = useState(4);

  return (
    <>
      <Title />
      <QuizModule lives={lives} setLives={setLives} gameState={gameState} setGameState={setGameState} />
    </>
  );
}

export default App;
