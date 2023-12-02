import React, {useState} from 'react'
import "./ChangeUser.css"
import {Form, Button} from "react-bootstrap"
import ModalAlert from "../RandomQuote/Modal";

function ChangeUser({username, options, changeCurrUser}) {
  const [selectedOption, setSelectedOption] = useState("")
  const [modalShow, setModalShow] = useState(false);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleClick = () => {
    setModalShow(true);
    changeCurrUser(selectedOption)
  }

  return (
    <div className="changeuser-container">
      <h3>Hello, {username}</h3>
      <label>Change User To: </label>
      <Form.Select
        aria-label="Default select example"
        name="change-user"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="">Select an Option</option>
        {options.map((option, index) => (
          <option key={index} value={option.username}>
            {option.username}
          </option>
        ))}
      </Form.Select>
      
      <Button variant="secondary" onClick={handleClick}>
        Change
      </Button>
      <div>To add new user, please go to "Home"</div>
      
      <ModalAlert
        show={modalShow}
        onHide={() => setModalShow(false)}
        text="Changed"
      ></ModalAlert>

    </div>
  );
}

export default ChangeUser