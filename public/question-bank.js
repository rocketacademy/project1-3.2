/* Each question has the following properties:
- title: the question title
- type: the question type (trivia, soundbite, picture)
- options: an array of responses
- correctAnswer: the correct answer
- difficulty: the difficulty level (Easy, Medium, Hard)
- source: to display images or soundplayer
*/

const questions = [
  {
    title: "What animal is Hedwig?",
    type: "trivia",
    options: ["Cat", "Stag", "Owl", "Beaver"],
    correctAnswer: "Owl",
    difficulty: "Easy",
    source: "Placeholder",
  },
];

export default questions;
