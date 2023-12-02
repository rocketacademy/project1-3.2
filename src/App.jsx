import { useState } from "react";
import { Stack, Container } from "@mui/system";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/joy/Typography";
import { Input, QueryButton } from "./input-box";
import OutputCard from "./output-card";
import doodle from "/logo.svg";
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
      <div>
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="center"
          useFlexGap
          flexWrap="wrap">
          <Input error={error} query={query} setQuery={setQuery} />
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            color="grey">
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
      <Stack
        direction="row"
        spacing={{ xs: 1.5, sm: 3, md: 4 }}
        justifyContent="center"
        useFlexGap
        flexWrap="wrap">
        <Typography level="title-md">Made With: </Typography>
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
        <a href="https://mui.com/" target="_blank" rel="noreferrer">
          <iconify-icon icon="logos:material-ui"></iconify-icon>
        </a>
      </Stack>
      <br />
      <Typography level="title-lg">
        By:{" "}
        <a href="https://github.com/jasperteo" target="_blank" rel="noreferrer">
          <iconify-icon icon="line-md:github-loop"></iconify-icon>
          jasperteo
        </a>
      </Typography>
      <br />
    </>
  );
}
