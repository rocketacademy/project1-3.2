import questionBank from "../../public/question-bank";
import Question from "./Question";
import { getTwoQuestions } from "../../utilities";
import { useState } from "react";

// use random generator function to retrieve an array of 2 questions
const selectedQuestions = getTwoQuestions(questionBank);

const QuizModule = () => {
  // Use state to store 2 selected questions
  const [questions, setQuestions] = useState(selectedQuestions);

  // Use state to store current question index (default 0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Access Q1
  const currentQuestion = questions[currentQuestionIndex];

  // Use state to store no. of lives
  const [lives, setLives] = useState(4);

  // // Function to handle option select to move to next question
  // const handleClick = () => {
  //   if (currentQuestionIndex === 0) {
  //     setCurrentQuestionIndex(currentQuestionIndex + 1);
  //   }
  //   // TODO-write logic for 2nd QN
  // }

  return (
    <>
      <div className="w-[24rem]">
        <Question {...currentQuestion} currentQuestionIndex={currentQuestionIndex} setCurrentQuestionIndex={setCurrentQuestionIndex} lives={lives} setLives={setLives}/>
      </div>
    </>
  );
};
export default QuizModule;
