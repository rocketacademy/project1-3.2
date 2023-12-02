import React, {useState, useEffect} from 'react'
import Quote from './Quote'
import UserInput from './UserInput'
import { getWord, getWordFromTF } from '../../utils';
import "./QuoteWrapper.css"

function QuoteWrapper({username, users, handleSaved, addViewedQuotes}) {
  const [feeling, setFeeling] = useState("");
  const [topic, setTopic] = useState("");
  const [quote, setQuote] = useState({});
  const [saveThisQuote, setSaveThisQuote] = useState(false)
  let quotesFromTF = []
  getWordFromTF()
  .then(quotes => quotesFromTF = quotes)

  const handleFeelingChange = (value) => {
    setFeeling(value);
  };

  const handleTopicChange = (value) => {
    setTopic(value);
  };

  const nextQuote = () => {
    let category = []
    if(feeling== "" && topic == "") {
      category = "random"
    } else if(feeling == "") {
      category = [topic]
    } else if (topic == ""){
      category = [feeling]
    } else {
      category = [feeling, topic];
    }
    console.log(category)
    let newQuote = (category == "random") ? 
                    quotesFromTF[Math.floor(Math.random() * quotesFromTF.length)]: 
                    getWord(category)
    setQuote(newQuote)
  };

  const saveThis = () => {
    setSaveThisQuote(true)
    openModal();
  }  

  useEffect(() => { 
    if (!(quote.text == null)) {
      handleSaved(username, quote);
    } else {
      null;
    }
  }, [saveThisQuote])

  useEffect(() => {
    if(!(quote.text == null)) {
      addViewedQuotes(quote);
    } else {
      null
    }
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
      <div className="input-wrapper">
        <UserInput
          inputLabel="Select a Feeling: "
          optionName="user-feeling"
          onDropdownChange={handleFeelingChange}
          options={["happy", "sad", "lazy"]}
        />
        <UserInput
          inputLabel="Select a Topic: "
          optionName="user-topic"
          onDropdownChange={handleTopicChange}
          options={["coding", "exercise", "cooking"]}
        />
        <UserInput
          inputLabel="Select a Person: "
          optionName="user-person"
          onDropdownChange={handleTopicChange}
          options={["coding", "exercise", "cooking"]}
        />
      </div>

      <Quote
        quote={quote.text}
        author={quote.author}
        nextQuote={nextQuote}
        saveThis={saveThis}
      />
    </div>
  );
}

export default QuoteWrapper