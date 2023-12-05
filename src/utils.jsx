import quotes from "./quotes.json";

//From Own Database
export const getWord = (category) => {
  let matchingQuotes = [];
  if (category[1] != "") {
    for (const quote of quotes) {
      quote.author.includes(category[1]) ?
      matchingQuotes.push(quote) : null
  }
  } else if (category[0] != ""){
    for (const quote of quotes) {
    quote.category.includes(category[0]) ?
      matchingQuotes.push(quote) : null
    }
  } 
  
  const defaultQuote = {
    text: "No Quote Found",
    author: "NA"
  }
  let matchingQuote = matchingQuotes.length > 0? matchingQuotes[Math.floor(Math.random() * matchingQuotes.length)] : defaultQuote
  return matchingQuote
};

export const getAuthors = () => {
  let authors = new Set();
  for (const quote of quotes) {
    authors.add(quote.author);
  }
  return [...authors];
}

export const getCategory = () => {
  let category = new Set();
  for (const quote of quotes) {
    category.add(quote.category[0]);
  }
  return [...category];
};

//From https://type.fit/api/quotes
export const getWordFromTF = async () => {
  let tfQuotes = []
  const response = await fetch("https://type.fit/api/quotes");
  tfQuotes = await response.json();
  return tfQuotes
}

//From API Ninjia 


