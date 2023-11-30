import React from 'react'

function Saved({username, users}) {
  return (
    <div>
      <h2>Hello, {username}</h2>
      { users.map(user => 
          user.username === username? 
          user.saved.map((quote,index) => (
          <li key={index}>{quote.text}</li>)
          ) : ""
      )} 
      {console.log(users)}  
    </div>
  )
}

export default Saved