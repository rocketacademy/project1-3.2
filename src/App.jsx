import NavBar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import QuoteWrapper from "./components/RandomQuote/QuoteWrapper";
import Home from "./components/Start/Home.jsx";
import ChangeUser from "./components/ChangeUser/ChangeUser.jsx";
import Create from "./components/Create/Create.jsx";
import Saved from "./components/Saved/Saved.jsx";
import Viewed from "./components/Viewed/Viewed.jsx";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { username: "Kelly", saved: [], created: [] },
    { username: "Jeremy", saved: [], created: [] }
  ]);
  const [currUser, setCurrUser] = useState("")
  const [viewedQuotes, setViewedQuotes] = useState([])
  
  const addUser = (name) => {
    setUsers([...users, {
      username: name,
      saved: [],
      created: []
    }])
  }

  const addViewedQuotes = (quote) => { 
    setViewedQuotes([...viewedQuotes, quote])
  }

  const changeCurrUser = (name) => {
    setCurrUser(name); 
  }

  const handleSaved = (username, quote) => {
    console.log(quote)
    setUsers(
      users.map((user) =>
        user.username === username
          ? { ...user, saved: [...user.saved, quote] }
          : user
      )
    );
  }

  const handleCreate = (username, quote) => {
    setUsers(
      users.map((user) =>
        user.username === username
          ? { ...user, created: [...user.created, quote] }
          : user
      )
    );
  }

  const handleDelete = (username, quote, saveOrcreated) => {
    if (saveOrcreated == "saved") {
      setUsers(
        users.map((user) =>
          user.username === username
            ? { ...user, saved: user.saved.filter((item) => item !== quote) }
            : user
        )
      );
    } else if (saveOrcreated == "created"){
      setUsers(
        users.map((user) =>
          user.username === username
            ? {
                ...user,
                created: user.created.filter((item) => item !== quote),
              }
            : user
        )
      );
    }

  }

  return (
    <>
    <div className="app-container">
      <NavBar />
        <Routes>
          <Route
            path="/start"
            element={
              <Home
                addUser={addUser}
                changeCurrUser={changeCurrUser}
                user={currUser}
              />
            }
          />
          <Route
            path="/quote"
            element={
              <QuoteWrapper
                username={currUser}
                users={users}
                handleSaved={handleSaved}
                addViewedQuotes={addViewedQuotes}
              />
            }
          />
          <Route
            path="/create"
            element={<Create username={currUser} handleCreate={handleCreate} />}
          />
          <Route
            path="/saved"
            element={<Saved username={currUser} users={users} handleDelete={handleDelete}/>}
          />
          <Route
            path="/viewed"
            element={<Viewed username={currUser} viewedQuotes={viewedQuotes} />}
          />
          <Route
            path="/change-user"
            element={
              <ChangeUser
                username={currUser}
                options={users}
                changeCurrUser={changeCurrUser}
              />
            }
          />
        </Routes>
    </div>
        
    </>
  );
}

export default App;
