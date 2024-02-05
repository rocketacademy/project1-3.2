import confetti from "canvas-confetti";
import ProgressBar from "./ProgressBar";
import { useState } from "react";
import Player from "./Player";

// Play sound effects on correct and wrong answers
const correctAnswerSound = new Audio("../../media/correct.mp3");
const wrongAnswerSound = new Audio("../../media/wrong.mp3");
const gameOverSound = new Audio("../../media/gameover.wav");

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
}) => {
  // use state to store number of questions answered for progress bar
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  // Function to check lives and end game if lives are 0
  const checkLives = () => {
    const newLives = lives - 1;
    setLives(newLives); // Lose a life
    if (newLives !== 0) {
      wrongAnswerSound.play();
    } else if (newLives === 0) {
      gameOverSound.play();
    }
  };

  // check correct answer upon submission
  const handleClick = (option) => {
    if (option === correctAnswer) {
      if (currentQuestionIndex === 0) {
        correctAnswerSound.play();
        confetti();
        setQuestionsAnswered(
          (prevQuestionsAnswered) => prevQuestionsAnswered + 1
        );
        setTimeout(() => {
          setCurrentQuestionIndex(1);
        }, 1200);
      } else {
        correctAnswerSound.play();
        confetti();
        setQuestionsAnswered(
          (prevQuestionsAnswered) => prevQuestionsAnswered + 1
        );
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
    <div className="flex flex-col px-8 py-2">
      <h3 className="text-lg font-semibold p-1 text-left my-2">{title}</h3>
      {type === "soundbite" && <Player source={source} />}
      {shuffledOptions.map((option) => {
        return (
          <button
            type="button"
            key={option}
            onClick={() => handleClick(option)}
            className="border-2 my-2 rounded-xl p-3 text-lg text-left pl-6 hover:bg-gray-50 hover:bg-opacity-20 transition duration-500 ease-in-out"
          >
            {option}
          </button>
        );
      })}
      <ProgressBar questionsAnswered={questionsAnswered} />
    </div>
  );
};
export default Question;
