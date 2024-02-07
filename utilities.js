// Function to randomly generate 2 questions from question bank

export function getTwoQuestions(questions) {
  // Make a copy of the original question bank
  const copyQuestions = [...questions];

  // Randomly select 1st question from the question bank
  const index1 = Math.floor(Math.random() * copyQuestions.length);
  const question1 = copyQuestions[index1];

  // Remove the selected question from the copy to avoid duplicates
  copyQuestions.splice(index1, 1);

  // Randomly select 2nd question from the copy question bank
  const index2 = Math.floor(Math.random() * copyQuestions.length);
  const question2 = copyQuestions[index2];

  // Return the selected questions
  return [question1, question2];
}

// Generate 6 rows for wordle game
export const NUM_OF_GUESSES_ALLOWED = 6
 
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