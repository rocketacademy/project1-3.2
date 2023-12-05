import React, {useState, useEffect} from 'react'
import Quote from './Quote'
import UserInput from './UserInput'
import ModalAlert from "./Modal.jsx";
import { getCategory, getAuthors, getWord, getWordFromTF } from '../../utils';
import "./QuoteWrapper.css"

function QuoteWrapper({username, users, handleSaved, addViewedQuotes}) {
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState({});
  const [saveThisQuote, setSaveThisQuote] = useState(false)
  const [modalShow, setModalShow] = useState(false);

  //Obtain quotes from TF 
  let quotesFromTF = []
  getWordFromTF()
  .then((quotes) =>
    quotes.map((quote) => {
      return {
        ...quote,
        author: quote.author.split(",")[0],
      };
    })
  )
  .then(quotes => quotesFromTF = quotes);
  
  const handleCategoryChange = (value) => {
    setCategory(value);
  };


  const handleAuthorChange = (value) => {
    setAuthor(value);
  };

  const nextQuote = () => {
    let categories = []
    let searchedWord = ""
    if(category == "" && author == "") {
      searchedWord = "random"
    } else {
      categories = [category, author]
    }
    let newQuote = (searchedWord == "random") ? 
                    quotesFromTF[Math.floor(Math.random() * quotesFromTF.length)]: 
                    getWord(categories)
    setQuote(newQuote)
  };

  const saveThis = () => {
    setModalShow(true);
    setSaveThisQuote(true)
  }  

  const closeSave = () => {
    setModalShow(false)
    setSaveThisQuote(false)
  }

  useEffect(() => { 
    if (!(quote.text == null)) {
      handleSaved(username, quote);
      setQuote({})
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

  return (
    <div className="quote-wrapper">
      <h3>Hello, {username}</h3>
      <div className="input-wrapper">
        <UserInput
          inputLabel="Select a Category: "
          optionName="user-feeling"
          onDropdownChange={handleCategoryChange}
          options={getCategory()}
        />
        <UserInput
          inputLabel="Select a Person: "
          optionName="user-person"
          onDropdownChange={handleAuthorChange}
          options={getAuthors()}
        />
      </div>

      <Quote
        quote={quote.text}
        author={quote.author}
        nextQuote={nextQuote}
        saveThis={saveThis}
      />
      <ModalAlert
        show={modalShow}
        onHide={() => closeSave()}
        text="Saved"
      ></ModalAlert>
    </div>
  );
}

export default QuoteWrapper