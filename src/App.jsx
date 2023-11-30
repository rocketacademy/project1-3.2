import { useState } from "react";
import { TextField, Button, ButtonGroup } from "@mui/material";
import { Stack, Container, Box } from "@mui/system";
import logo from "/stock.svg";
import MarketData from "./marketData";
import "./App.css";

function App() {
  const [symbol, setSymbol] = useState(["AAPL", "MSFT", "GOOG"]);
  const [query, setQuery] = useState("");

  const queryButton = (index) => (
    <Button
      sx={{
        fontFamily: "InterVariable",
        bgcolor: "#444444",
        color: "#ddd0c8",
        "will-change": "filter",
        "&:hover": {
          filter: "drop-shadow(0 0 2em #333333)",
          transition: "all 0.69s",
        },
        "iconify-icon": {
          height: "1.125em",
        },
      }}
      key={index}
      onClick={() => setSymbol((prev) => prev.toSpliced(index, 1, query))}
    >
      Query<iconify-icon icon="line-md:upload-loop"></iconify-icon>
    </Button>
  );

  const tickerCard = (ticker, index) => (
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
  );

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
          value={query}
          onChange={(e) => setQuery(e.target.value.toUpperCase())}
          id="tickerInput"
          label="(e.g. AAPL / C:USDSGD / X:BTCUSD)"
          variant="filled"
          placeholder="Type in Stock/FX/Crypto Ticker"
          color="grey"
          sx={{
            width: "21em",
          }}
        />
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          color="grey"
        >
          {[...Array(3)].map((ignored, index) => queryButton(index))}
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
        {symbol.map((ticker, index) => tickerCard(ticker, index))}
      </Container>
    </>
  );
}

export default App;
