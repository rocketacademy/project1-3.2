import React from 'react'
import { useState } from 'react'

function ChangeUser({options, changeCurrUser}) {
  const [selectedOption, setSelectedOption] = useState("")

    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };

    const handleClick = () => {
      changeCurrUser(selectedOption)
    }

  return (
    <>
      <label>Change User To: </label>
      <select
        name="change-user"
        value = {selectedOption}
        onChange={handleChange}>
        <option value="">Select an Option</option>
        {options.map((option, index) => (
          <option key={index} value={option.username}>
            {option.username}
          </option>
        ))}
      </select>
      <br></br>
      <button onClick={handleClick}>Change</button>

      <div>To add new user, please go to "Home"</div>
    </>
  )
}

export default ChangeUser