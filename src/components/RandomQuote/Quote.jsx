import React from 'react'
import { useState } from 'react'
import './Quote.css'

function Quote() {
  const [ quote, setQuote ] = useState({
    text: "XXXX",
    author: "YYYY"
  });
  
  return (
    <div className="quote-container">
      <div className="quote-text">{quote.text}</div>
      <div className="quote-line"></div>
      <div className="quote-bottom">
        <div className="author">{quote.author}</div>
        <button>Next</button>
      </div>
    </div>
  );
}

export default Quote