import confetti from "canvas-confetti";
import ProgressBar from "./ProgressBar";
import { useState } from "react";
import Player from "./Player";

// Play sound effects on correct and wrong answers
const correctAnswerSound = new Audio("../../media/correct.mp3");
const wrongAnswerSound = new Audio("../../media/wrong.mp3");

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
    if (newLives === 0) {
      console.log("Game over!");
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
      wrongAnswerSound.play();
      checkLives()
    }
  };

  // Function to shuffle the options of a question
  const shuffledOptions = options.sort(() => Math.random() - 0.5);

  return (
    <div className="flex flex-col border-gray-600 border-2 p-8 rounded-xl bg-[#202848]">
      <p className="text-xl">{lives} lives</p>
      <h3 className="mb-4 text-lg font-semibold p-2 text-left">{title}</h3>
      {type === "soundbite" && <Player source={source} />}
      {shuffledOptions.map((option) => {
        return (
          <button
            type="button"
            key={option}
            onClick={() => handleClick(option)}
            className="border-2 my-2 rounded-xl p-4 text-xl text-left pl-6 hover:bg-gray-50 hover:bg-opacity-20 transition duration-500 ease-in-out"
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
