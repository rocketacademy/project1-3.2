import React from "react";
import "./UserInput.css"

function UserInput({inputLabel, selectedValue, onDropdownChange, options}) {

  return (
    <div>
      <label>{inputLabel}: </label>
      <select
        value={selectedValue}
        onChange={(e) => onDropdownChange(e.target.value)}>
        <option value="">Select an Option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserInput;
