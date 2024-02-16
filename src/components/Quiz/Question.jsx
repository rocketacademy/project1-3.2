import confetti from "canvas-confetti";
import ProgressBar from "./ProgressBar";
import { useState } from "react";
import Player from "./Player";

// Play sound effects on correct and wrong answers
const correctAnswerSound = new Audio("src/assets/correct.mp3");
const wrongAnswerSound = new Audio("src/assets/wrong.mp3");
const gameOverSound = new Audio("src/assets/gameover.mp3");

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

  // Use state to track questions answered
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  // Track intermediate loading state
  const [isAnswered, setIsAnswered] = useState(false);

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
      setIsAnswered(true);
      if (currentQuestionIndex === 0) {
        setQuestionsAnswered(1);
        setTimeout(() => {
          setCurrentQuestionIndex(1);
          setIsAnswered(false);
        }, 1200);
      } else {
        setQuestionsAnswered(2);
        setIsAnswered(true);
        setTimeout(() => {
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
          setIsAnswered(false);
        }, 1200);
      }
    } else {
      const newLives = lives - 1;
      setLives(newLives); // Lose a life
      checkLives(newLives);
      setIsAnswered(true);

      setTimeout(() => {
        const newQuestions = [gameQuestions.pop(), gameQuestions.pop()];
        setCurrQuestions(newQuestions);
        setCurrentQuestionIndex(0);
        setIsAnswered(false);
      }, 1200);
    }
  };

  // Disable buttons after answering to prevent double submission of responses
  const disableButtons = isAnswered
    ? `hover:bg-gray-700 cursor-not-allowed opacity-30`
    : `hover:bg-gray-700 cursor-pointer`;

  return (
    <div className="flex flex-col px-8 py-2 relative flex-grow">
      {showMinusOne && (
        <div className="absolute right-5 -top-8 font-semibold text-xl animate-fade-move">
          -1
        </div>
      )}
      <h3 className="text-md font-semibold p-1 text-left mt-2 mb-2 lg:text-lg">
        {title}
      </h3>
      {type === "soundbite" && <Player source={source} />}
      {type === "image" && (
        <img
          src={`/src/assets/question-soundbites/${source}`}
          className="rounded-md w-3/4 mb-2"
          alt="image"
        />
      )}
      <div className="flex flex-col my-2">
        {options.map((option) => {
          return (
            <button
              type="button"
              key={option}
              onClick={() => handleClick(option)}
              className={`border-2 border-gray-600 rounded-xl p-4 text-md text-white text-left pl-4 transition duration-500 ease-in-out my-2 ${disableButtons}`}
              disabled={isAnswered}
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
