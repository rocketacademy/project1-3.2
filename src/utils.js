import quotes from "./quotes.json";

export const getWord = (feeling, topic) => {
  const matchingQuote = quotes.find(quote => quote.feeling === feeling && quote.topic === topic);
  return matchingQuote ? matchingQuote.text : "No matching quote found.";
}

console.log(getWord("happy", ""))


