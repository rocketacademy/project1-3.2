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
  {
    id: 3,
    title: "Guess the song",
    type: "soundbite",
    options: ["Yellow", "Viva La Vida", "There She Goes", "Collide"],
    correctAnswer: "Viva La Vida",
    difficulty: "Easy",
    source: "soundbite-3.mp3",
  },
  {
    id: 4,
    title: "Who is Spiderman?",
    type: "trivia",
    options: ["Miles Morales", "Peter Pakey", "Roman Reigns", "Johnny Fire"],
    correctAnswer: "Miles Morales",
    difficulty: "Easy",
    source: null,
  },
  {
    id: 5,
    title:
      "Who is the author of the Harry Potter series?",
    type: "trivia",
    options: [
      "Stephanie Meyer",
      "J.K Rowling",
      "George R.R Martin",
      "Jordin Sparks",
    ],
    correctAnswer: "J.K Rowling",
    difficulty: "Easy",
    source: null,
  },
  {
    id: 6,
    title: "What is React JS?",
    type: "trivia",
    options: [
      "Framework",
      "Programming Language",
      "UI Library",
      "Data Structure",
    ],
    correctAnswer: "UI Library",
    difficulty: "Easy",
    source: null,
  },
  {
    id: 7,
    title: "What is React JS?",
    type: "trivia",
    options: [
      "Framework",
      "Programming Language",
      "UI Library",
      "Data Structure",
    ],
    correctAnswer: "UI Library",
    difficulty: "Easy",
    source: null,
  },
  {
    id: 8,
    title: "What is React JS?",
    type: "trivia",
    options: [
      "Framework",
      "Programming Language",
      "UI Library",
      "Data Structure",
    ],
    correctAnswer: "UI Library",
    difficulty: "Easy",
    source: null,
  },
  {
    id: 9,
    title: "What is React JS?",
    type: "trivia",
    options: [
      "Framework",
      "Programming Language",
      "UI Library",
      "Data Structure",
    ],
    correctAnswer: "UI Library",
    difficulty: "Easy",
    source: null,
  },
  {
    id: 10,
    title: "What is React JS?",
    type: "trivia",
    options: [
      "Framework",
      "Programming Language",
      "UI Library",
      "Data Structure",
    ],
    correctAnswer: "UI Library",
    difficulty: "Easy",
    source: null,
  },
  {
    id: 11,
    title: "What is React JS?",
    type: "trivia",
    options: [
      "Framework",
      "Programming Language",
      "UI Library",
      "Data Structure",
    ],
    correctAnswer: "UI Library",
    difficulty: "Easy",
    source: null,
  },
  {
    id: 12,
    title: "What is React JS?",
    type: "trivia",
    options: [
      "Framework",
      "Programming Language",
      "UI Library",
      "Data Structure",
    ],
    correctAnswer: "UI Library",
    difficulty: "Easy",
    source: null,
  },
];

export default questionBank;
