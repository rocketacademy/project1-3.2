import React, { useEffect } from "react";
import { useState } from "react"
import Form from "react-bootstrap/Form";
import "./QuoteWrapper.css"


function UserInput({inputLabel, optionName, onDropdownChange, options}) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    onDropdownChange(selectedOption)
  }, [selectedOption])

  return (
    <Form.Group>
      <Form.Label className="input-field mb-2">{inputLabel}</Form.Label>
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
    </Form.Group>
  );
}

export default UserInput;
