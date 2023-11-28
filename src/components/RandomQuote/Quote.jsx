import React from 'react'
import { useState } from 'react'
import './Quote.css'

function Quote() {
    const [quote, setQuote] = useState({
      text: "XXXX",
      author: "YYYY",
    });

  let quotes = []

  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  }
  
  loadQuotes()

  return (
    <>    
    <div className="quote-container">
      <div className="quote-text">{quote.text}</div>
      <div className="quote-line"></div>
      <div className="quote-bottom">
        <div className="author">{quote.author.split(',')[0]}</div>
        <button onClick={() => {random()}}>Next</button>
      </div>
    </div>
    </>

  );
}

export default Quote