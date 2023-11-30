import React, { useState } from "react"; // eslint-disable-line
import "./App.css";
import MarketData from "./marketData";
import logo from "/icons8-stock.svg";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function App() {
  const [symbol, setSymbol] = useState(["AAPL", "MSFT", "GOOG"]);
  const [query, setQuery] = useState("");
  return (
    <>
      <div>
        <img className="logo" src={logo} alt="apple-stocks" />
      </div>
      <h1 className="title">PriceQuery Project</h1>
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
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            color="grey"
          >
            <Button
              onClick={() => setSymbol((prev) => prev.toSpliced(0, 1, query))}
            >
              Query<iconify-icon icon="line-md:upload-loop"></iconify-icon>
            </Button>
            <Button
              onClick={() => setSymbol((prev) => prev.toSpliced(1, 1, query))}
            >
              Query<iconify-icon icon="line-md:upload-loop"></iconify-icon>
            </Button>
            <Button
              onClick={() => setSymbol((prev) => prev.toSpliced(2, 1, query))}
            >
              Query<iconify-icon icon="line-md:upload-loop"></iconify-icon>
            </Button>
          </ButtonGroup>
        </Stack>
      </div>
      <div className="container">
        {" "}
        {symbol.map((t) => (
          <div className="card" key={t}>
            <MarketData ticker={t} />
          </div>
        ))}
        {/* <div className="card">
          <MarketData ticker={symbol[0]} />
        </div>
        <div className="card">
          <MarketData ticker={symbol[1]} />
        </div>
        <div className="card">
          <MarketData ticker={symbol[2]} />
        </div> */}
      </div>
    </>
  );
}

export default App;
