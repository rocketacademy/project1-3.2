import React, { useState } from "react";
import "./App.css";
import Data from "./utils";

function App() {
  const [symbol, setSymbol] = useState("MSFT");
  const [query, setQuery] = useState("");
  return (
    <>
      <div>
        <img
          width="480"
          height="480"
          src="https://img.icons8.com/doodle/480/apple-stocks.png"
          alt="apple-stocks"
        />
      </div>
      <h1>Jasper test project $420.69$</h1>
      <div className="card">
        <div>
          <div>
            <Data ticker={symbol} />
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Type in Stock Symbol"
            value={query}
            onChange={(e) => setQuery(e.target.value.toUpperCase())}
          />
          <button onClick={() => setSymbol(query)}>Submit!</button>
        </form>
      </div>
    </>
  );
}

export default App;
