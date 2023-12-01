import React, {useState} from 'react'
import Modal from '../RandomQuote/Modal';

function Create({username, handleCreate}) {
  const [quote, setQuote] = useState("");
  const [category, setCategory] = useState("")
  const [showModal, setShowModal] = useState(false);

  const handleText = (event) => {
    setQuote(event.target.value);
  }
  
  const handleCategory = (event) => {
    setCategory(event.target.value)
  }

  const createQuote = () => {
    event.preventDefault()
    if(username == "") {
      console.log(username)
      openModal()
      return
    }
    const newQuote = {
      text: quote,
      author: username,
      category: category
    };
    handleCreate(username, newQuote);
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h3>Hello, {username}</h3>
      <div>Write your own code: </div>
      <form onSubmit={createQuote}>
        <div>
          <textarea
            id="user-quote"
            rows="4"
            cols="50"
            onChange={handleText}
          ></textarea>
        </div>
        <div>
          <label>Category: </label>
          <input type="text" onChange={handleCategory}></input>
        </div>
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>

      <Modal showModal={showModal} closeModal={closeModal}>
        <h2>Please Input or Choose a User First!</h2>
      </Modal>
    </div>
  );
}

export default Create