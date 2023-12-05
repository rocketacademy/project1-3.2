import { useState } from "react";

export default function Journal() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [journal, setJournal] = useState("");
  const [journalLog, setJournalLog] = useState([]);

  // Submit journal function
  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new journal object
    const newJournal = {
      title,
      date,
      journal,
    };
    // Update the journal log
    setJournalLog([...journalLog, newJournal]);
    // Reset the form fields
    setTitle("");
    setDate("");
    setJournal("");
  };

  // Edit journal function
  const handleEdit = (index) => {
    // Retrieve the journal object at the specified index
    const journalToEdit = journalLog[index];
    // Set the form fields with the values from the journal object
    setTitle(journalToEdit.title);
    setDate(journalToEdit.date);
    setJournal(journalToEdit.journal);
    // Remove the journal from the journal log
    setJournalLog(journalLog.filter((_, i) => i !== index));
  };

  // Delete journal function
  const handleDelete = (index) => {
    // Remove the journal from the journal log
    setJournalLog(journalLog.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h5>Journal Entry</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          value={date}
          placeholder="DD/MM/YY"
          onChange={(event) => setDate(event.target.value)}
        />
        <input
          type="text"
          value={journal}
          placeholder="Journal here..."
          onChange={(event) => setDate(event.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <h5>Journal Logs</h5>
      {journalLog.map((quoteItem, index) => (
        <div key={index}>
          <p>Title: {quoteItem.title}</p>
          <p>Date: {quoteItem.date}</p>
          <p>Journal: {quoteItem.journal}</p>
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
