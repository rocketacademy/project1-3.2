/* Each question has the following properties:
- id: unique identifier
- title: the question title
- type: the question type (trivia, soundbite, picture)
- options: an array of responses
- correctAnswer: the correct answer
- difficulty: the difficulty level (Easy, Medium, Hard)
- source: to display images or soundplayer
*/

const questionBank = [
  {
    id: 1,
    title: "What animal is Hedwig?",
    type: "trivia",
    options: ["Cat", "Stag", "Owl", "Beaver"],
    correctAnswer: "Owl",
    difficulty: "Easy",
    source: "Placeholder",
  },
  {
    id: 2,
    title: "What is the first color of the rainbow?",
    type: "trivia",
    options: ["Red", "Blue", "Yellow", "Green"],
    correctAnswer: "Red",
    difficulty: "Easy",
    source: "Placeholder",
  },
];

export default questionBank;
