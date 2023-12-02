import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Quote({quote, author, nextQuote, saveThis}) {
  return (
    <>
      <div className="quote-container">
        <Card class="quote-box">
          <Card.Header>Here's a nice quote for you...</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p> {quote} </p>
              <footer className="blockquote-footer">{author}</footer>
            </blockquote>
          </Card.Body>
          <div>
            <button onClick={nextQuote}>Generate Quote</button>
            <button onClick={saveThis}>Save</button>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Quote