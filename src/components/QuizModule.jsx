import questions from "../../public/question-bank";
import Question from "./Question";

// use random generator function to retrieve an array of 2 questions
// TODO

const QuizModule = () => {
  // use state to store array of 2 selected questions
  // TODO
  
  return (
    <div>
      <Question {...question} />
    </div>
  );
};
export default QuizModule;
