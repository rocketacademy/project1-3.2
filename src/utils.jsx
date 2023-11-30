import quotes from "./quotes.json";

//From Own Database
export const getWord = (category) => {
  const matchingQuote = quotes.find((quote) =>
    quote.category.includes(...category)
  );
  const defaultQuote = {
    text: "No Quote Found",
    author: "NA"
  }
  return matchingQuote ? matchingQuote : defaultQuote;
};

//From https://type.fit/api/quotes
export const getWordFromTF = async () => {
  let quotes = []
  const response = await fetch("https://type.fit/api/quotes");
  quotes = response.json();
  console.log(quotes)
}

//From API Ninjia 


