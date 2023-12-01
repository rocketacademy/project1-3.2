import { useState } from "react";
import { TextField, Button, ButtonGroup } from "@mui/material";
import { Stack, Container } from "@mui/system";
import TickerCard from "./ticker-card";
import logo from "/stock.svg";
import "./App.css";

export default function App() {
  const [ticker, setTicker] = useState(["AAPL", "MSFT", "AMZN"]);
  const [query, setQuery] = useState("");

  //Lifted from MarketData.jsx to App.jsx
  const [error, setError] = useState([null, null, null]);

  const QueryButton = (index) => (
    <Button
      key={index}
      onClick={() =>
        query && setTicker((prev) => prev.toSpliced(index, 1, query))
      }
      sx={{
        fontFamily: "Geist Variable",
        bgcolor: "#444444",
        color: "#ddd0c8",
        willChange: "filter",
        "&:hover": {
          filter: "drop-shadow(0 0 2em #333333)",
          transition: "all 0.69s",
        },
        "iconify-icon": {
          height: "1em",
        },
      }}
    >
      Query<iconify-icon icon="line-md:upload-loop"></iconify-icon>
    </Button>
  );

  return (
    <>
      <img className="logo" src={logo} alt="apple-stocks" />
      <h1 className="title">📈 PriceQuery Project 📉</h1>
      <div className="inputfield">
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="center"
          useFlexGap
          flexWrap="wrap"
        >
          <TextField
            error={error.some((element) => element !== null)}
            value={query}
            onChange={(e) => setQuery(e.target.value.toUpperCase())}
            id="tickerInput"
            label="(e.g. AAPL / C:USDSGD / X:BTCUSD)"
            variant="filled"
            placeholder="Type in Stock / FX / Crypto Ticker"
            color="grey"
            sx={{
              width: "21em",
              fontFamily: "Geist Variable !important",
              "*": {
                fontFamily: "Geist Variable !important",
                "*": { fontFamily: "Geist Variable !important" },
              },
            }}
          />

          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            color="grey"
          >
            {[...Array(3)].map((ignored, index) => QueryButton(index))}
          </ButtonGroup>
        </Stack>
      </div>
      <Container
        sx={{
          my: "4em",
          display: "flex",
          height: "26em",
          maxWidth: "48em",
        }}
      >
        {ticker.map((ticker, index) => (
          <TickerCard
            ticker={ticker}
            key={index} //bad practice
            index={index}
            error={error}
            setError={setError}
          />
        ))}
      </Container>
    </>
  );
}
