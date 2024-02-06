import confetti from "canvas-confetti";
import ProgressBar from "./ProgressBar";
import { useState } from "react";
import Player from "./Player";

// Play sound effects on correct and wrong answers
const correctAnswerSound = new Audio("../../media/correct.mp3");
const wrongAnswerSound = new Audio("../../media/wrong.mp3");
const gameOverSound = new Audio("../../media/gameover.mp3");

const Question = ({
  title,
  options,
  type = "trivia",
  source = null,
  correctAnswer,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  lives,
  setLives,
  setGameState,
}) => {
  // use state to store number of questions answered for progress bar
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  // Use state to show -1 health animation
  const [showMinusOne, setShowMinusOne] = useState(false);

  // Function to check lives and end game if lives are 0
  const checkLives = () => {
    const newLives = lives - 1;
    setLives(newLives); // Lose a life
    if (newLives !== 0) {
      wrongAnswerSound.play();
      setShowMinusOne(true);
      setTimeout(() => {
        setShowMinusOne(false);
      }, 800);
    } else if (newLives === 0) {
      gameOverSound.play();
      setGameState("lose");
      console.log("Game Over");
    }
  };

  // check correct answer upon submission
  const handleClick = (option) => {
    if (option === correctAnswer) {
      correctAnswerSound.play();
      confetti();
      setQuestionsAnswered(
        (prevQuestionsAnswered) => prevQuestionsAnswered + 1
      );
      if (currentQuestionIndex === 0) {
        setTimeout(() => {
          setCurrentQuestionIndex(1);
        }, 1200);
      } else {
        setTimeout(() => {
          console.log("Go to guess state");
        }, 1200);
      }
    } else {
      checkLives();
    }
  };

  // Shuffle the options of a question
  const shuffledOptions = options.sort(() => Math.random() - 0.5);

  return (
    <div className="flex flex-col px-8 py-2 relative">
      {showMinusOne && (
        <div className="absolute right-5 -top-8 font-semibold text-xl animate-fade-move">
          -1
        </div>
      )}
      <h3 className="text-lg font-semibold p-1 text-left my-2">{title}</h3>
      {type === "soundbite" && <Player source={source} />}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4">
        {shuffledOptions.map((option) => {
          return (
            <button
              type="button"
              key={option}
              onClick={() => handleClick(option)}
              className="border-2 border-gray-600 rounded-xl p-3 text-md text-gray-400 hover:text-gray-100 text-left pl-4 hover:bg-gray-50 hover:bg-opacity-20 transition duration-500 ease-in-out"
            >
              {option}
            </button>
          );
        })}
      </div>
      <ProgressBar questionsAnswered={questionsAnswered} />
    </div>
  );
};
export default Question;
