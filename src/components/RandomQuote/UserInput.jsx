import React from "react";
import "./UserInput.css"

function UserInput() {
  return (
    <>
    <div className="input-container">
      <h2>How are you feeling today?</h2>
      <div>
        <select name="options" >
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Lazy">Lazy</option>
        </select>
      </div>
    </div>

    </>
  );
}

export default UserInput;
