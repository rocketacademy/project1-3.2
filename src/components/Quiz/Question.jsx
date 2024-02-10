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
  gameQuestions,
  setCurrQuestions,
  setGameQuestions,
}) => {
  // Use state to show -1 health animation
  const [showMinusOne, setShowMinusOne] = useState(false);

  // Function to check lives and end game if lives are 0
  const checkLives = (newLives) => {
    if (newLives !== 0) {
      wrongAnswerSound.play();
      setShowMinusOne(true);
      setTimeout(() => {
        setShowMinusOne(false);
        setGameState("guess");
      }, 800);
    } else if (newLives === 0) {
      gameOverSound.play();
      setGameState("lost");
    }
  };

  // check correct answer upon submission
  const handleClick = (option) => {
    if (option === correctAnswer) {
      correctAnswerSound.play();
      confetti();
      if (currentQuestionIndex === 0) {
        setCurrentQuestionIndex(1);
      } else {
        setGameState("guess");
        // draw 2 more qns from gameQuestions
        const gameQuestionsCopy = [...gameQuestions];
        const nextQuestions = [
          gameQuestionsCopy.pop(),
          gameQuestionsCopy.pop(),
        ];
        setCurrQuestions(nextQuestions);
        setGameQuestions(gameQuestionsCopy);
        setCurrentQuestionIndex(0);
      }
    } else {
      const newLives = lives - 1;
      setLives(newLives); // Lose a life
      checkLives(newLives);
      setTimeout(() => {
        const newQuestions = [gameQuestions.pop(), gameQuestions.pop()];
        setCurrQuestions(newQuestions);
        setCurrentQuestionIndex(0);
      }, 1200);
    }
  };

  return (
    <div className="flex flex-col px-8 py-2 relative">
      {showMinusOne && (
        <div className="absolute right-5 -top-8 font-semibold text-xl animate-fade-move">
          -1
        </div>
      )}
      <h3 className="text-lg font-semibold p-1 text-left my-2">{title}</h3>
      {type === "soundbite" && <Player source={source} />}
      {type === "image" && (
        <img
          src={`../../media/question-soundbites/${source}`}
          className="rounded-md w-full"
          alt="image"
        />
      )}
      <div className="flex flex-col my-4">
        {options.map((option) => {
          return (
            <button
              type="button"
              key={option}
              onClick={() => handleClick(option)}
              className="border-2 border-gray-600 rounded-xl p-4 text-md text-white text-left pl-4 hover:bg-gray-700 transition duration-500 ease-in-out my-2"
            >
              {option}
            </button>
          );
        })}
      </div>
      <ProgressBar questionsAnswered={currentQuestionIndex} />
    </div>
  );
};
export default Question;
