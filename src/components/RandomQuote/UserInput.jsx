import React, { useEffect } from "react";
import { useState } from "react"
import Form from "react-bootstrap/Form";


function UserInput({inputLabel, optionName, onDropdownChange, options}) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    onDropdownChange(selectedOption )
  }, [selectedOption])

  return (
    <div className="input-field">
      <label>{inputLabel}</label>
      <Form.Select
        aria-label="Default select example"
        name={optionName}
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="">Select an Option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}

export default UserInput;
