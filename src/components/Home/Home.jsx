import React, { useState } from 'react'

function Home({addUser, user, changeCurrUser}) {
  const [tempUser, setTempUser] = useState("");
  const [showGreet, setShowGreet] = useState(false);

  const greetUser = () => {
    addUser(tempUser);
    setShowGreet(true);
    changeCurrUser(tempUser);
  }

  const handleChange = (event) => {
    setTempUser(event.target.value)
  }

  return (
    <>
    <div>Hello, What is your name?</div>
    <input type="text" onChange={(e) => handleChange(e)}></input>
    <button onClick={greetUser}>Submit</button>
    {showGreet? 
    <div>
      <h3>Hello, {user}. Let's get inspired!</h3>
      <p>Click "Quote" to Begin! </p>
    </div> : null}
    </>
  )
}

export default Home