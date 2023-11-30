import React from 'react'

function Featured ({viewedQuotes}) {
  return (
    <div>
      <ul>
        {viewedQuotes? viewedQuotes.map((quote,index) => (
          <li key={index}>{quote.text}</li>
        )): null}
      </ul>
    </div>
  )
}

export default Featured