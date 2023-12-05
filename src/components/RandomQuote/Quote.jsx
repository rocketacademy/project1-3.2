import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "animate.css";

function Quote({quote, author, nextQuote, saveThis}) {
  const [generate, setGenerate] = useState(false)
  const [modalShow, setModalShow] = useState(false);

  const generateQuote = () => {
    nextQuote(); 
    setGenerate(true)
  }

  return (
    <>
      <div className="quote-buttons">
        <Button variant="outline-primary" onClick={generateQuote}>
          Generate Quote
        </Button>
        <Button variant="outline-primary" onClick={saveThis}>
          Save
        </Button>
      </div>
      {generate ? (
        <div className="quote-container animate__animated animate__fadeIn">
          <Card class="quote-box">
            <Card.Header>Here's a nice quote for you...</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p> {quote} </p>
                <footer className="blockquote-footer">{author}</footer>
              </blockquote>
            </Card.Body>
          </Card>
        </div>
      ) : null}
    </>
  );
}

export default Quote