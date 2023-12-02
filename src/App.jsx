import { useState } from "react";
import { Stack, Container } from "@mui/system";
import { Button, ButtonGroup } from "@mui/material";
import Typography from "@mui/joy/Typography";
import Input from "./input-box";
import OutputCard from "./output-card";
import doodle from "/logo.svg";
import polygon from "/polygonio.svg";
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

      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="center"
        useFlexGap
        flexWrap="wrap">
        <Input error={error} query={query} setQuery={setQuery} />
        <ButtonGroup
          variant="contained"
          aria-label="outlined button group"
          color="inherit">
          {[...Array(ticker.length)].map((ignored, index) => (
            <QueryButton
              key={index}
              index={index}
              setTicker={setTicker}
              query={query}
            />
          ))}
        </ButtonGroup>
      </Stack>

      <div className="plus-minus">
        <PlusMinusButton ticker={ticker} setTicker={setTicker} />
      </div>
      <Container
        sx={{
          my: "2em",
          display: "flex",
          height: "26em",
        }}>
        {ticker.map((ticker, index) => (
          <OutputCard
            ticker={ticker}
            key={index}
            index={index}
            error={error}
            setError={setError}
          />
        ))}
      </Container>
      <br />
      <div className="footer">
        <Stack
          direction="row"
          spacing={{ xs: 1.5, sm: 3, md: 4 }}
          justifyContent="center"
          alignItems="center"
          al>
          <Typography level="title-lg">Made With: </Typography>
          <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
            <iconify-icon icon="logos:vitejs"></iconify-icon>
          </a>
          <a href="https://react.dev/" target="_blank" rel="noreferrer">
            <iconify-icon icon="logos:react"></iconify-icon>
          </a>
          <a href="https://bun.sh/" target="_blank" rel="noreferrer">
            <iconify-icon icon="logos:bun"></iconify-icon>
          </a>
          <a href="https://axios-http.com/" target="_blank" rel="noreferrer">
            <iconify-icon
              icon="devicon-plain:axios"
              style={{ color: "#5a29e4" }}></iconify-icon>
          </a>
          {/* <a
          href="https://tanstack.com/query/latest"
          target="_blank"
          rel="noreferrer">
          <iconify-icon icon="logos:react-query-icon"></iconify-icon>
        </a> */}
          <a href="https://mui.com/" target="_blank" rel="noreferrer">
            <iconify-icon icon="logos:material-ui"></iconify-icon>
          </a>
          <a href="https://polygon.io/" target="_blank" rel="noreferrer">
            <img src={polygon} alt="polygonio-logo" />
          </a>
        </Stack>
        <br />
        <Typography level="title-lg">
          By:{" "}
          <a
            href="https://github.com/jasperteo"
            target="_blank"
            rel="noreferrer">
            <iconify-icon icon="line-md:github-loop"></iconify-icon>
            jasperteo
          </a>
        </Typography>
        <br />
      </div>
    </>
  );
}

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
    }}>
    Query<iconify-icon icon="line-md:upload-loop"></iconify-icon>
  </Button>
);

const PlusMinusButton = ({ ticker, setTicker }) => (
  <ButtonGroup variant="text" aria-label="button group" color="inherit">
    <Button
      onClick={() =>
        ticker.length < 6 && setTicker((prev) => [...prev, "AAPL"])
      }>
      <iconify-icon icon="line-md:plus-square-twotone"></iconify-icon>
    </Button>
    <Button
      onClick={() =>
        ticker.length > 2 && setTicker((prev) => prev.toSpliced(-1, 1))
      }>
      <iconify-icon icon="line-md:minus-square-twotone"></iconify-icon>
    </Button>
  </ButtonGroup>
);
