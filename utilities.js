// Get a random index ranging from 0 (inclusive) to max (exclusive).
const getRandomIndex = (max) => Math.floor(Math.random() * max);

// Shuffle list of questions
export const shuffleQuestions = (questions) => {
  // Loop over the array of questions
  for (
    let currentIndex = 0;
    currentIndex < questions.length;
    currentIndex += 1
  ) {
    // Select a random index
    const randomIndex = getRandomIndex(questions.length);
    // Select the question that corresponds to randomIndex
    let randomQuestion = questions[randomIndex];
    // Randomize order of options of the randomQuestion
    randomQuestion.options.sort(() => Math.random() - 0.5);
    // Select the question that corresponds to currentIndex
    let currentQuestion = questions[currentIndex];
    // Randomize order of options of the currentQuestion
    currentQuestion.options.sort(() => Math.random() - 0.5);
    // Swap positions of randomQuestion and currentQuestion in the deck
    questions[currentIndex] = randomQuestion;
    questions[randomIndex] = currentQuestion;
  }
  // Return the shuffled deck
  return questions;
};

// Generate 6 rows for wordle game
export const NUM_OF_GUESSES_ALLOWED = 6;

export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export function checkGuess(guess, answer) {
  // This constant is a placeholder that indicates we've successfully
  // dealt with this character (it's correct, or misplaced).
  const SOLVED_CHAR = "✓";

  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split("");
  const answerChars = answer.split("");

  const result = [];

  // Step 1: Look for correct letters.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = {
        letter: guessChars[i],
        status: "correct",
      };
      answerChars[i] = SOLVED_CHAR;
      guessChars[i] = SOLVED_CHAR;
    }
  }

  // Step 2: look for misplaced letters. If it's not misplaced,
  // it must be incorrect.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === SOLVED_CHAR) {
      continue;
    }

    let status = "incorrect";
    const misplacedIndex = answerChars.findIndex(
      (char) => char === guessChars[i]
    );
    if (misplacedIndex >= 0) {
      status = "misplaced";
      answerChars[misplacedIndex] = SOLVED_CHAR;
    }

    result[i] = {
      letter: guessChars[i],
      status,
    };
  }

  return result;
}
