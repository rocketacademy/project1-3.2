import React, { useState } from "react";
import "./App.css";
import Data from "./utils";
import logo from "/icons8-stock.svg";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function App() {
  const [symbol, setSymbol] = useState("AAPL");
  const [query, setQuery] = useState("");
  return (
    <>
      <div>
        <img className="logo" src={logo} alt="apple-stocks" />
      </div>
      <h1>Jasper test project $420.69$</h1>
      <div className="input">
        <Stack direction="row" spacing={3}>
          <TextField
            sx={{
              width: 350,
            }}
            color="grey"
            id="filled-basic"
            label="(e.g. AAPL / C:USDSGD / X:BTCUSD)"
            variant="filled"
            placeholder="Type in Stock/FX/Crypto Ticker"
            value={query}
            onKeyDown={(e) => e.key === "Enter" && setSymbol(query)}
            onChange={(e) => setQuery(e.target.value.toUpperCase())}
          />
          <Button variant="contained" onClick={() => setSymbol(query)}>
            Query<iconify-icon icon="line-md:upload-loop"></iconify-icon>
          </Button>
        </Stack>
      </div>
      <div className="container">
        <div className="card">
          <Data className="title" ticker={symbol} />
        </div>
        <div className="card">
          <Data className="title" ticker={symbol} />
        </div>
        <div className="card">
          <Data className="title" ticker={symbol} />
        </div>
      </div>
    </>
  );
}

export default App;
