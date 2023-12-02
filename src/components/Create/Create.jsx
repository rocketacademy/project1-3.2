import React, {useState} from 'react'
import ModalAlert from '../RandomQuote/Modal';
import {Form, Button} from "react-bootstrap";
import "./Create.css"

function Create({username, handleCreate}) {
  const [quote, setQuote] = useState("");
  const [category, setCategory] = useState("")
  const [modalShow, setModalShow] = useState(false);

  const handleText = (event) => {
    setQuote(event.target.value);
  }
  
  const handleCategory = (event) => {
    setCategory(event.target.value)
  }

  const createQuote = () => {
    event.preventDefault()
    if(username == "") {
      setModalShow(true);
      return
    } else {
      const newQuote = {
      text: quote,
      author: username,
      category: category
      };    
      handleCreate(username, newQuote);
    }
  };

  return (
    <div className="create-container">
      <h3>Hello, {username}</h3>
      <Form onSubmit={createQuote}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Write Your Own Quote</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={handleText} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Category"
            onChange={handleCategory}
          />
        </Form.Group>
        <Button variant="primary" onClick={createQuote}>
          Create
        </Button>
      </Form>
      <ModalAlert
        show={modalShow}
        onHide={() => setModalShow(false)}
        text="Created"
      ></ModalAlert>
    </div>
  );
}

export default Create