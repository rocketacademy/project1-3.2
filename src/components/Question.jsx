import confetti from "canvas-confetti";
import ProgressBar from "./ProgressBar";
import { useState } from "react";

const Question = ({
  title,
  options,
  correctAnswer,
  currentQuestionIndex,
  setCurrentQuestionIndex,
}) => {
  // use state to store number of questions answered for progress bar
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  // check correct answer upon submission
  const handleClick = (option) => {
    if (option === correctAnswer) {
      if (currentQuestionIndex === 0) {
        setCurrentQuestionIndex(1);
        setQuestionsAnswered(
          (prevQuestionsAnswered) => prevQuestionsAnswered + 1
        );
      } else {
        confetti();
        setQuestionsAnswered(
          (prevQuestionsAnswered) => prevQuestionsAnswered + 1
        );
        console.log("Go to guess state");
      }
    } else {
      console.log("Incorrect and lose a life!");
    }
  };

  return (
    <div className="flex flex-col border-2 p-8 rounded-xl">
      <h3 className="mb-4 text-2xl">{title}</h3>
      {options.map((option) => {
        return (
          <button
            type="button"
            key={option}
            onClick={() => handleClick(option)}
            className="border-2 my-2 rounded-2xl p-4 text-xl text-left pl-6 hover:bg-gray-50 hover:bg-opacity-20 transition duration-500 ease-in-out"
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
