import "./App.css";
import QuizModule from "./components/Quiz/QuizModule";
import Title from "./components/Title";
import { useState } from "react";
import WordleModule from "./components/Wordle/WordleModule";

function App() {
  const [gameState, setGameState] = useState("guess"); // quiz, guess, win, lose

  // Use state to store no. of lives
  const [lives, setLives] = useState(4);

  return (
    <>
      <Title />
      <div className="flex">
        <WordleModule />
        <QuizModule
          lives={lives}
          setLives={setLives}
          setGameState={setGameState}
        />
      </div>
    </>
  );
}

export default App;
