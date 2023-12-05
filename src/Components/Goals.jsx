import { useState } from "react";

export default function Goals() {
  const [goal, setGoal] = useState("");
  const [goalList, setGoalList] = useState([]);

  // Submit goal function
  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new goal object
    const newGoal = {
      goal,
    };
    // Update the goal list
    setGoalList([...goalList, newGoal]);
    // Reset the form fields
    setGoal("");
  };

  // Edit goal function
  const handleEdit = (index) => {
    // Retrieve the goal object at the specified index
    const goalToEdit = goalList[index];
    // Set the form fields with the values from the goal object
    setGoal(goalToEdit.goal);
    // Remove the goal from the goal list
    setGoalList(goalList.filter((_, i) => i !== index));
  };

  // Delete goal function
  const handleDelete = (index) => {
    // Remove the goal from the goal list
    setGoalList(goalList.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h5>What am I trying to achieve...</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={goal}
          placeholder="Write your goals here..."
          onChange={(event) => setGoal(event.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <h5>List of Goals</h5>
      {goalList.map((goalItem, index) => (
        <div key={index}>
          <p>{goalItem.goal}</p>
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
