import { useState } from "react";

export default function Gratitude() {
  const [gratitude, setGratitude] = useState("");
  const [gratitudeList, setGratitudeList] = useState([]);

  // Submit grattiude function
  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new gratitude object
    const newGratitude = {
      gratitude,
    };
    // Update the gratitude list
    setGratitudeList([...gratitudeList, newGratitude]);
    // Reset the form fields
    setGratitude("");
  };

  // Edit gratitude function
  const handleEdit = (index) => {
    // Retrieve the gratitude object at the specified index
    const gratitudeToEdit = gratitudeList[index];
    // Set the form fields with the values from the gratitude object
    setGratitude(gratitudeToEdit.gratitude);
    // Remove the gratitude from the gratitude list
    setGratitudeList(gratitudeList.filter((_, i) => i !== index));
  };

  // Delete gratitude function
  const handleDelete = (index) => {
    // Remove the gratitude from the gratitude list
    setGratitudeList(gratitudeList.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h5>What am I grateful for...</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={gratitude}
          placeholder="I am grateful for..."
          onChange={(event) => setGratitude(event.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <h5>Gratitude List</h5>
      {gratitudeList.map((gratitudeItem, index) => (
        <div key={index}>
          <p>{gratitudeItem.gratitude}</p>
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
