import React from 'react'
import { Button, Card } from "react-bootstrap";

function QuoteCard({username, quote, handleDelete, saveOrCreated}) {

  const handleClick = () => {
    handleDelete(username, quote, saveOrCreated)
  }
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{quote.author}</Card.Title>
          <Card.Text>{quote.text}</Card.Text>
          <Button variant="secondary" onClick={handleClick}>Delete</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default QuoteCard