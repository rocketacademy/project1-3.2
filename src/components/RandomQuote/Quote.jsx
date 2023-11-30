import React from 'react'
import { useState } from 'react'
import './Quote.css'

function Quote({quote, author, nextQuote, saveThis}) {
  return (
    <>    
    <div className="quote-container">
      <div className="quote-text">{quote}</div>
      <div className="quote-line"></div>
      <div className="quote-bottom">
        <div className="author">{author}</div>
        <div>
          <button onClick={nextQuote}>Generate Quote</button>
          <button onClick={saveThis}>Save</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Quote