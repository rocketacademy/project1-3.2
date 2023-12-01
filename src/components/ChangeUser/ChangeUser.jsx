import React from 'react'
import Modal from '../RandomQuote/Modal';
import { useState } from 'react'

function ChangeUser({username, options, changeCurrUser}) {
  const [selectedOption, setSelectedOption] = useState("")
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleClick = () => {
    openModal() 
    changeCurrUser(selectedOption)
  }

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <h3>Hello, {username}</h3>
      <label>Change User To: </label>
      <div>
        <select name="change-user" value={selectedOption} onChange={handleChange}>
        <option value="">Select an Option</option>
        {options.map((option, index) => (
          <option key={index} value={option.username}>
            {option.username}
          </option>
        ))}
      </select>
      </div>
      <button onClick={handleClick}>Change</button>

      <Modal showModal={showModal} closeModal={closeModal}>
        <h2>User Changed!</h2>
      </Modal>
      <br></br>
      <br></br>
      <div>To add new user, please go to "Home"</div>
    </>
  );
}

export default ChangeUser