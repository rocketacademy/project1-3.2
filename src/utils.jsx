import quotes from "./quotes.json";

//From Own Database
export const getWord = (category) => {
  let matchingQuotes = [];
  console.log(category)
  for (const quote of quotes) {
    quote.category.includes(...category) ?
      matchingQuotes.push(quote) : null
  }
  const defaultQuote = {
    text: "No Quote Found",
    author: "NA"
  }

  const matchingQuote = matchingQuotes[Math.floor(Math.random() * matchingQuotes.length)]
  return matchingQuotes ? matchingQuote : defaultQuote;
};

//From https://type.fit/api/quotes
export const getWordFromTF = async () => {
  let tfQuotes = []
  const response = await fetch("https://type.fit/api/quotes");
  tfQuotes = await response.json();
  return tfQuotes
}

//From API Ninjia 


