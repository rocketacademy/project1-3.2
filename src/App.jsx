import React, { useState } from "react"; // eslint-disable-line
import { TextField, Button, ButtonGroup } from "@mui/material";
import { Stack, Container, Box } from "@mui/system";
import logo from "/stock.svg";
import MarketData from "./marketData";
import "./App.css";

function App() {
  const [symbol, setSymbol] = useState(["AAPL", "MSFT", "GOOG"]);
  const [query, setQuery] = useState("");

  return (
    <>
      <div>
        <img className="logo" src={logo} alt="apple-stocks" />
      </div>
      <h1 className="title">📈 PriceQuery Project 📉</h1>
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="center"
        useFlexGap
        flexWrap="wrap"
      >
        <TextField
          sx={{
            width: "21em",
          }}
          color="grey"
          id="filled-basic"
          label="(e.g. AAPL / C:USDSGD / X:BTCUSD)"
          variant="filled"
          placeholder="Type in Stock/FX/Crypto Ticker"
          value={query}
          onChange={(e) => setQuery(e.target.value.toUpperCase())}
        />
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          color="grey"
        >
          {[...Array(3)].map((ignored, index) => (
            <Button
              key={index}
              onClick={() =>
                setSymbol((prev) => prev.toSpliced(index, 1, query))
              }
            >
              Query<iconify-icon icon="line-md:upload-loop"></iconify-icon>
            </Button>
          ))}
        </ButtonGroup>
      </Stack>
      <Container
        sx={{
          my: "4em",
          display: "flex",
          height: "25em",
          width: "45em",
        }}
      >
        {symbol.map((ticker, index) => (
          <Box
            key={index}
            height="25em"
            width="16em"
            bgcolor="#99775c"
            borderRadius="0.75em"
            boxShadow="-1em 0 3em #1a1a1a"
            ml="0.75em"
            left="0em"
            position="relative"
            sx={{
              transition: "0.4s ease-out",
              "&:not(:first-child)": {
                ml: "-3em",
              },
              "&:hover": {
                transform: "translateY(-1.25em)",
                transition: "0.4s ease-out",
              },
              "&:hover ~ &": {
                position: "relative",
                left: "3.125em",
                transition: "0.4s ease-out",
              },
            }}
          >
            <MarketData ticker={ticker} />
          </Box>
        ))}
      </Container>
    </>
  );
}

export default App;
