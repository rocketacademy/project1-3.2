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

