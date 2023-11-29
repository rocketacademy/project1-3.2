import React, { useState } from "react";
import "./App.css";
import Data from "./utils";
import logo from "/icons8-stock.svg";

function App() {
  const [symbol, setSymbol] = useState("MSFT");
  const [query, setQuery] = useState("");
  return (
    <>
      <div>
        <img className="logo" src={logo} alt="apple-stocks" />
      </div>
      <h1>Jasper test project $420.69$</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Type in Stock Symbol"
          value={query}
          onKeyDown={(e) => e.key === "Enter" && setSymbol(query)}
          onChange={(e) => setQuery(e.target.value.toUpperCase())}
        />
        <button onClick={() => setSymbol(query)}>Submit!</button>
      </form>
      <div className="container">
        <Data ticker={symbol} />
      </div>
    </>
  );
}

export default App;
