/* Each question has the following properties:
- id: unique identifier
- title: the question title
- type: the question type (trivia, soundbite, picture)
- options: an array of responses
- correctAnswer: the correct answer
- source: to display images or soundplayer
*/

const questionBank = [
  {
    id: 1,
    title: "Which streaming service is this?",
    type: "soundbite",
    options: ["Disney+", "Netflix", "Amazon Prime", "HBO Max"],
    correctAnswer: "Netflix",
    source: "q1.mp3",
  },
  {
    id: 2,
    title: "Can you identify the movie?",
    type: "soundbite",
    options: [
      "500 Days of Summer",
      "Harry Potter",
      "Ready Player One",
      "Wizard of Oz",
    ],
    correctAnswer: "Harry Potter",
    source: "q2.mp3",
  },
  {
    id: 3,
    title: "Can you identify the movie?",
    type: "soundbite",
    options: [
      "The Lord of the Rings",
      "The Avengers",
      "Star Wars",
      "The Hobbit",
    ],
    correctAnswer: "The Lord of the Rings",
    source: "q3.mp3",
  },
  {
    id: 4,
    title: "Can you identify the movie?",
    type: "image",
    options: ["Big Hero 6", "Frozen", "The Incredibles", "Up"],
    correctAnswer: "Up",
    source: "q4.jpg",
  },
  {
    id: 5,
    title: "Can you identify the movie?",
    type: "soundbite",
    options: [
      "Pirates of the Caribbean",
      "Avatar",
      "Apollo 13",
      "Journey to the Center of the Earth",
    ],
    correctAnswer: "Pirates of the Caribbean",
    source: "q5.mp3",
  },
  {
    id: 6,
    title: "Identify the country?",
    type: "image",
    options: ["Germany", "France", "Austria", "Czech Republic"],
    correctAnswer: "Germany",
    source: "q6.jpg",
  },
  {
    id: 7,
    title: "Guess the song?",
    type: "soundbite",
    options: [
      "New Jeans - Super Shy",
      "BLACKPINK - The Girls",
      "Twice - The Feels",
      "Red Velvet - Bamboleo",
    ],
    correctAnswer: "New Jeans - Super Shy",
    source: "q7.mp3",
  },
  {
    id: 8,
    title: "Guess the Coldplay song?",
    type: "soundbite",
    options: [
      "Viva La Vida",
      "Yellow",
      "Hymn for the Weekend",
      "A Sky Full of Stars",
    ],
    correctAnswer: "Viva La Vida",
    source: "q8.mp3",
  },
  {
    id: 9,
    title:
      "In J.K. Rowling's 'Harry Potter' series, what is the name of Harry's owl?",
    type: "trivia",
    options: ["Scabbers", "Hedwig", "Crookshanks", "Fawkes"],
    correctAnswer: "Hedwig",
    source: null,
  },
  {
    id: 10,
    title: "Who co-founded Apple Inc. alongside Steve Jobs?",
    type: "trivia",
    options: ["Bill Gates", "Steve Wozniak", "Mark Zuckerberg", "Jeff Bezos"],
    correctAnswer: "Steve Wozniak",
    source: null,
  },
  {
    id: 11,
    title:
      "What is the name of this device used for immersive digital experiences?",
    type: "image",
    options: [
      "Oculus Rift",
      "Playstation VR",
      "Microsoft HoloLens",
      "Apple Vision Pro",
    ],
    correctAnswer: "Apple Vision Pro",
    source: 'q11.jpg',
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
    source: null,
  },
  {
    id: 13,
    title: "What animal is Hedwig?",
    type: "trivia",
    options: ["Cat", "Stag", "Owl", "Beaver"],
    correctAnswer: "Owl",
    source: "Placeholder",
  },
];

export default questionBank;
