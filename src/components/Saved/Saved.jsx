import React from 'react'
import QuoteCard from './QuoteCard';
import "./Saved.css"

function Saved({username, users, handleDelete}) {
  return (
    <div className="saved-container">
      <h3>Hello, {username}</h3>
      <br />
      <h5>Saved Quotes: </h5>
      <div className="saved-list">
        {users.map((user) =>
          user.username === username
            ? user.saved.map((quote, index) => (
                <QuoteCard
                  username={username}
                  key={index}
                  quote={quote}
                  handleDelete={handleDelete}
                  saveOrCreated="saved"
                />
              ))
            : null
        )}
      </div>
      <br />

      <h5>Created Quotes: </h5>
        <div className="saved-list">
          {users.map((user) =>
            user.username === username
              ? user.created.map((quote, index) => (
                  <QuoteCard
                    username={username}
                    key={index}
                    quote={quote}
                    handleDelete={handleDelete}
                    saveOrCreated="created"
                  />
                ))
              : null
          )}
        </div>
    </div>
  );
}

export default Saved