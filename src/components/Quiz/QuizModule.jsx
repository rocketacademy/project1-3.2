import questionBank from "../../question-bank";
import Question from "./Question";
import { shuffleQuestions } from "../../../utilities";
import { useState } from "react";
import HeartContainer from "./HeartContainer";
import { motion } from "framer-motion";

const shuffledQuestions = shuffleQuestions(questionBank);

const getTwoQuestions = [shuffledQuestions.pop(), shuffledQuestions.pop()];

const QuizModule = ({ setGameState, gameState, lives, setLives }) => {
  // Store set of shuffled questions for current game
  const [gameQuestions, setGameQuestions] = useState(shuffledQuestions);

  // Store 2 selected questions
  const [currQuestions, setCurrQuestions] = useState(getTwoQuestions);

  // Store current question index (default 0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Access Q1
  const currentQuestion = currQuestions[currentQuestionIndex];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.4,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-[22rem] border-[#3C4B85] border-[3px] rounded-md lg:mt-0 lg:w-[40%]"
      >
        <div
          className={`flex justify-between items-center
         bg-[#263056] rounded-t px-8 py-4`}
        >
          {gameState === "quiz" && (
            <p className="text-left text-gray-400 hover:text-gray-200 transition duration-300 ease-in-out font-semibold text-sm">
              <span className="text-sm tracking-wider font-semibold mr-1">
                QUESTION
              </span>{" "}
              {currentQuestionIndex + 1} / 2
            </p>
          )}
          {(gameState === "guess" ||
            gameState === "won" ||
            gameState === "lost") && (
            <p className="text-left text-gray-400 font-semibold">
              Guess the word
            </p>
          )}
          {lives ? (
            <HeartContainer lives={lives} />
          ) : (
            <div className="fade my-auto text-red-500 font-semibold">
              No Lives Left !
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
            setCurrQuestions={setCurrQuestions}
            gameQuestions={gameQuestions}
            setGameQuestions={setGameQuestions}
          />
        )}
      </motion.div>
    </>
  );
};
export default QuizModule;
