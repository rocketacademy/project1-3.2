import React from 'react'

function Saved({username, users}) {
  return (
    <div>
      <h3>Hello, {username}</h3>
      <div>Here are the quotes you saved: </div>
      {users.map((user) =>
        user.username === username
          ? user.saved.map((quote, index) => <li key={index}>{quote.text}</li>)
          : null
      )}
      <div>Here are the quotes you created: </div>
      {users.map((user) =>
        user.username === username
          ? user.created.map((quote, index) => <li key={index}>{quote.text}</li>)
          : null
      )}
    </div>
  );
}

export default Saved