import React, { useState } from 'react'
import './Home.css'
import "animate.css";

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
      <div className="home-container">
        <div className="home-greet">Hello, what is your name?</div>
        <div>
          <input type="text" onChange={(e) => handleChange(e)}></input>
          <button onClick={greetUser}>Submit</button>
        </div>

        {showGreet ? (
          <div className="home-answer animate__animated animate__fadeIn">
            <h3>Hello, {user} </h3>
            <h4>Ready to be inspired?</h4>
            <br />
            <h5>Click "Quote" to Begin! </h5>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Home