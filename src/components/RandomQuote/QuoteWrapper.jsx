import React, {useState, useEffect} from 'react'
import Quote from './Quote'
import UserInput from './UserInput'
import { getWord, getWordFromTF } from '../../utils';
import Modal from './Modal';

function QuoteWrapper({username, users, handleSaved, addViewedQuotes}) {
  const [feeling, setFeeling] = useState("");
  const [topic, setTopic] = useState("");
  const [quote, setQuote] = useState({});
  const [saveThisQuote, setSaveThisQuote] = useState(false)

  const handleFeelingChange = (value) => {
    setFeeling(value);
  };

  const handleTopicChange = (value) => {
    setTopic(value);
  };

  const nextQuote = () => {
    let category = []
    if(feeling == "") {
      category = [topic]
    } else if (topic == ""){
      category = [feeling]
    } else {
      category = [feeling, topic];
    }
    console.log("Searched for: " + category)
    let newQuote = getWord(category)
    setQuote(newQuote)
  };

  const saveThis = () => {
    setSaveThisQuote(true)
    openModal();
  }  

  useEffect(() => { 
    console.log("runs")
    handleSaved(username, quote);
  }, [saveThisQuote])

  useEffect(() => {
    addViewedQuotes(quote);
  },[quote])

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setSaveThisQuote(false);
  }

  return (
    <div className="quote-wrapper">
      <h3>Hello, {username}</h3>
      <UserInput
        inputLabel="How are you feeling?"
        optionName="user-feeling"
        onDropdownChange={handleFeelingChange}
        options={["happy", "sad", "lazy"]}
      />
      <UserInput
        inputLabel="Choose a random topic"
        optionName="user-topic"
        onDropdownChange={handleTopicChange}
        options={["coding", "exercise", "cooking"]}
      />
      <Quote
        quote={quote.text}
        author={quote.author}
        nextQuote={nextQuote}
        saveThis={saveThis}
      />
      <Modal showModal={showModal} closeModal={closeModal}>
        <h2>Saved!</h2>
      </Modal>
      {console.log(saveThisQuote)}
    </div>
  );
}

export default QuoteWrapper