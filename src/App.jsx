import logo from "/logo.png";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import QuoteWrapper from "./components/RandomQuote/QuoteWrapper";
import Home from "./components/Home/Home";
import { useEffect, useState } from "react";
import {getWord} from "./utils.jsx";
import ChangeUser from "./components/ChangeUser/ChangeUser.jsx";
import Create from "./components/Create/Create.jsx";
import Saved from "./components/Saved/Saved.jsx";
import Featured from "./components/Featured/Featured.jsx";

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
    setUsers(
      users.map((user) =>
        user.username === username
          ? { ...user, saved: [...user.saved, quote] }
          : user
      )
    );
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
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
        <Route path="/create" element={<Create username={currUser} />} />
        <Route
          path="/saved"
          element={<Saved username={currUser} users={users} />}
        />
        <Route
          path="/featured"
          element={<Featured viewedQuotes={viewedQuotes} />}
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
    </>
  );
}

export default App;
