import React, {useState} from 'react'
import Quote from './Quote'
import UserInput from './UserInput'

function QuoteWrapper() {
  const [feeling, setFeeling] = useState("");
  const [topic, setTopic] = useState("");
  const [quote, setQuote] = useState({
    text: "XXXX",
    author: "YYYY",
  });

  const handleFeelingChange = (value) => {
    setFeeling(value);
  };

  const handleTopicChange = (value) => {
    setTopic(value);
  };

  let quotes = [];
  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }
  loadQuotes();

  const nextQuote = () => {
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(newQuote);
  };

  return (
    <div className="quote-wrapper">
      <UserInput
        inputLabel="How are you feeling?"
        selectedValue={feeling}
        onDropdownChange={handleFeelingChange}
        options={["happy", "sad", "lazy"]}
      />
      <UserInput
        inputLabel="Choose a random topic"
        selectedValue={topic}
        onDropdownChange={handleTopicChange}
        options={["coding", "exercise", "cooking"]}
      />
      <Quote quote={quote.text} author={quote.author.split(",")[0]} nextQuote={nextQuote} />
    </div>
  );
}

export default QuoteWrapper