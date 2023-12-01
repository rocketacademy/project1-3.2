import React from 'react'

function Viewed ({username, viewedQuotes}) {
  return (
    <div>
      <h3>Viewed Quotes: </h3>
      <ul>
        {viewedQuotes
          ? viewedQuotes.map((quote, index) => (
              <li key={index}>{quote.text}</li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default Viewed