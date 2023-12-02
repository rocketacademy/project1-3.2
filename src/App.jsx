import { useState } from "react";
import {
  TextField,
  Button,
  ButtonGroup,
  Stack,
  Container,
} from "@mui/material";
import TickerCard from "./ticker-card";
import doodle from "/stock.svg";
import "./App.css";

export default function App() {
  const [ticker, setTicker] = useState(["AAPL", "NVDA", "AMZN"]);
  const [query, setQuery] = useState("");
  //Lifted from error useState from MarketData.jsx to App.jsx
  const [error, setError] = useState([null, null, null]);

  return (
    <>
      <img className="logo" src={doodle} alt="doodle-chart" />
      <h1 className="title">📈 PriceQuery 📉</h1>
      <div className="inputfield">
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="center"
          useFlexGap
          flexWrap="wrap"
        >
          <Input error={error} query={query} setQuery={setQuery} />
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            color="grey"
          >
            {[...Array(3)].map((ignored, index) => (
              <QueryButton
                key={index}
                index={index}
                setTicker={setTicker}
                query={query}
              />
            ))}
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
            key={index}
            index={index}
            error={error}
            setError={setError}
          />
        ))}
      </Container>
    </>
  );
}

const Input = ({ error, query, setQuery }) => (
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
);

const QueryButton = ({ index, setTicker, query }) => (
  <Button
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
