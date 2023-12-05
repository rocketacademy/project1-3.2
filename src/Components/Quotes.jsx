import { useState } from "react";

export default function Quotes() {
  // getItem() - save and store data into localStorage
  const [quote, setQuote] = useState("");
  // (
  //   JSON.parse(localStorage.getItem("quote")) || []
  // );
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [quotesList, setQuotesList] = useState([]);

  // Submit quote function
  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new quote object
    const newQuote = {
      quote,
      author,
      date,
    };
    // Update the quotes list
    setQuotesList([...quotesList, newQuote]);
    // Reset the form fields
    setQuote("");
    setAuthor("");
    setDate("");
    // setItem() - re-render data onto browser from localStorage
    // localStorage.setItem("quote", JSON.stringify(newQuote));
  };

  // Edit quote function
  const handleEdit = (index) => {
    // Retrieve the quote object at the specified index
    const quoteToEdit = quotesList[index];
    // Set the form fields with the values from the quote object
    setQuote(quoteToEdit.quote);
    setAuthor(quoteToEdit.author);
    setDate(quoteToEdit.date);
    // Remove the quote from the quotes list
    setQuotesList(quotesList.filter((_, i) => i !== index));
  };

  // Delete quote function
  const handleDelete = (index) => {
    // Remove the quote from the quotes list
    setQuotesList(quotesList.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h5>Create New Quote</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={quote}
          placeholder="Insert quote..."
          onChange={(event) => setQuote(event.target.value)}
        />
        <input
          type="text"
          value={author}
          placeholder="Author..."
          onChange={(event) => setAuthor(event.target.value)}
        />
        <input
          type="text"
          value={date}
          placeholder="DD/MM/YY"
          onChange={(event) => setDate(event.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <h5>List of Quotes</h5>
      {quotesList.map((quoteItem, index) => (
        <div key={index}>
          <p>Quote: {quoteItem.quote}</p>
          <p>Author: {quoteItem.author}</p>
          <p>Date: {quoteItem.date}</p>
          <button
            onClick={() => handleEdit(index)}
            style={{ backgroundColor: "white", width: "90px", height: "90px" }}
          >
            <img src="Icons/edit.png" />
          </button>
          <button
            onClick={() => handleDelete(index)}
            style={{ backgroundColor: "white", width: "90px", height: "90px" }}
          >
            <img src="Icons/delete.png" />
          </button>
        </div>
      ))}
    </div>
  );
}
