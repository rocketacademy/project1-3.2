import questionBank from "../../question-bank";
import Question from "./Question";
import { shuffleQuestions } from "../../../utilities";
import { useState } from "react";
import HeartContainer from "./HeartContainer";

const shuffledQuestions = shuffleQuestions(questionBank);

const getTwoQuestions = [shuffledQuestions.pop(), shuffledQuestions.pop()];

const QuizModule = ({ setGameState, gameState, lives, setLives }) => {
  // Store set of shuffled questions for current game
  const [gameQuestions, setGameQuestions] = useState(shuffledQuestions);

  // Store 2 selected questions
  const [questions, setQuestions] = useState(getTwoQuestions);

  // Store current question index (default 0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Access Q1
  const currentQuestion = questions[currentQuestionIndex];

  const setOpacity = () => {
    if (gameState === "guess") {
      return "opacity-30";
    } else {
      return "opacity-100";
    }
  };

  return (
    <>
      <div
        className={`w-[30rem] border-[#3C4B85] border-[3px] rounded-xl mx-auto ${setOpacity()}`}
      >
        <div
          className={`flex ${
            gameState === "quiz" ? "justify-between" : "justify-end"
          } bg-[#263056] rounded-t-xl px-8 py-4`}
        >
          {gameState === "quiz" && (
            <p className="text-left text-gray-400 hover:text-gray-200 transition duration-300 ease-in-out font-semibold">
              <span className="text-sm tracking-wider font-semibold mr-1">
                QUESTION
              </span>{" "}
              {currentQuestionIndex + 1} / 2
            </p>
          )}
          {lives ? (
            <HeartContainer lives={lives} />
          ) : (
            <div className="fade my-auto text-red-500 font-semibold tracking-wider">
              NO LIVES LEFT !
            </div>
          )}
        </div>

        {gameState === "quiz" && (
          <Question
            {...currentQuestion}
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            lives={lives}
            setLives={setLives}
            setGameState={setGameState}
            setQuestions={setQuestions}
            gameQuestions={gameQuestions}
            setGameQuestions={setGameQuestions}
          />
        )}
        {gameState === "guess" && (
          <div className="mt-[50%] text-xl">⬅️ Guess the secret word!</div>
        )}
      </div>
    </>
  );
};
export default QuizModule;
