import questionBank from "../../question-bank";
import Question from "./Question";
import { getTwoQuestions } from "../../../utilities";
import { useState } from "react";
import HeartContainer from "./HeartContainer";

// use random generator function to retrieve an array of 2 questions
const selectedQuestions = getTwoQuestions(questionBank);

const QuizModule = ({ setGameState, lives, setLives }) => {
  // Use state to store 2 selected questions
  const [questions, setQuestions] = useState(selectedQuestions);

  // Use state to store current question index (default 0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Access Q1
  const currentQuestion = questions[currentQuestionIndex];

  // // Function to handle option select to move to next question
  // const handleClick = () => {
  //   if (currentQuestionIndex === 0) {
  //     setCurrentQuestionIndex(currentQuestionIndex + 1);
  //   }
  //   // TODO-write logic for 2nd QN
  // }

  return (
    <>
      <div className="w-[28rem] border-[#3C4B85] border-[3px] rounded-xl mx-auto mt-4">
        <div className="flex justify-between bg-[#263056] rounded-t-xl px-8 py-4 relative">
          <p className="text-left p-1 text-xl text-gray-400 hover:text-gray-200 transition duration-300 ease-in-out font-semibold">
            <span className="text-sm tracking-wider font-semibold mr-1">
              QUESTION
            </span>{" "}
            {currentQuestionIndex + 1} / 2
          </p>
          {lives ? (
            <HeartContainer lives={lives} />
          ) : (
            <div className="fade my-auto text-red-500 font-semibold tracking-wider">
              NO LIVES LEFT !
            </div>
          )}
        </div>
        <Question
          {...currentQuestion}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          lives={lives}
          setLives={setLives}
          setGameState={setGameState}
        />
      </div>
    </>
  );
};
export default QuizModule;
