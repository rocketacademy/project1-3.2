import "./App.css";
import QuizModule from "./components/Quiz/QuizModule";
import Title from "./components/Title";
import { useState } from "react";
import WordleModule from "./components/Wordle/WordleModule";
import Help from "./components/Help";

function App() {
  const [gameState, setGameState] = useState("quiz"); // quiz, guess, won, lost

  // Use state to store no. of lives
  const [lives, setLives] = useState(4);

  return (
    <>
      <Title />
      <div className="flex flex-col items-center gap-y-4">
        <WordleModule gameState={gameState} setGameState={setGameState} />
        <QuizModule
          lives={lives}
          setLives={setLives}
          gameState={gameState}
          setGameState={setGameState}
        />
        <Help />
      </div>
    </>
  );
}

export default App;
