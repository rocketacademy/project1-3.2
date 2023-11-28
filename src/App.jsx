import React, { useState } from "react";
import "./App.css";
import MarketData from "./marketData";

function App() {
  const [ticker, setTicker] = useState("SPY");
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
          <h2>Price: </h2>
          <code>
            <MarketData ticker={ticker} />
          </code>
        </div>
      </div>
    </>
  );
}

export default App;
