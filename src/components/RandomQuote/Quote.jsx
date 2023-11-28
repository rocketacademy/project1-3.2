import React from 'react'
import { useState } from 'react'
import './Quote.css'

function Quote({quote, author, nextQuote}) {
  return (
    <>    
    <div className="quote-container">
      <div className="quote-text">{quote}</div>
      <div className="quote-line"></div>
      <div className="quote-bottom">
        <div className="author">{author}</div>
        <div>
          <button onClick={nextQuote}>Next</button>
          <button>Save</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Quote