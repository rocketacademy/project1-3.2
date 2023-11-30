import React, { useState } from "react";
import "./App.css";
import Data from "./utils";
import logo from "/icons8-stock.svg";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";

function App() {
  const [symbol, setSymbol] = useState("AAPL");
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
          placeholder="(e.g. AAPL or C:USDSGD)"
          value={query}
          onKeyDown={(e) => e.key === "Enter" && setSymbol(query)}
          onChange={(e) => setQuery(e.target.value.toUpperCase())}
        />
        <button onClick={() => setSymbol(query)}>
          Query<iconify-icon icon="line-md:upload-loop"></iconify-icon>
        </button>
      </form>
      <div className="container">
        <Data ticker={symbol} />
      </div>
    </>
  );
}

export default App;
