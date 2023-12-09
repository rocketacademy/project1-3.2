import { useEffect, useState } from "react";
import { Stack, Container } from "@mui/system";
import Typography from "@mui/joy/Typography";
import Input from "./input-box";
import OutputCard from "./output-card";
import { QueryButton, PlusMinusButton } from "./buttons";
import doodle from "/logo.svg";
import polygon from "/polygonio.svg";
import "./App.css";

export default function App() {
  const [ticker, setTicker] = useState(
    JSON.parse(localStorage.getItem("userTicker")) ?? ["MSFT", "NVDA", "AMZN"]
  );
  const [query, setQuery] = useState("");
  //Lifted from error useState from MarketData.jsx to App.jsx
  const [error, setError] = useState([null, null, null]);

  useEffect(() => {
    localStorage.setItem("userTicker", JSON.stringify(ticker));
  }, [ticker]);

  return (
    <>
      <img className="logo" src={doodle} alt="doodle-chart" />
      <Typography
        level="h1"
        my="4rem"
        fontSize="4rem"
        fontWeight="690"
        letterSpacing="-0.022rem"
        color="inherit">
        📈 PriceQuery 📉
      </Typography>

      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="center"
        useFlexGap
        flexWrap="wrap">
        <Input error={error} query={query} setQuery={setQuery} />
        <QueryButton ticker={ticker} setTicker={setTicker} query={query} />
      </Stack>

      <div className="plus-minus">
        <PlusMinusButton
          ticker={ticker}
          setTicker={setTicker}
          setError={setError}
        />
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

      <Footer />
    </>
  );
}

const Footer = () => (
  <div className="footer">
    <Stack
      direction="row"
      spacing={{ xs: 1.5, sm: 3, md: 4 }}
      justifyContent="center"
      alignItems="center">
      <Typography level="title-lg" color="inherit" fontSize="1.25em">
        Made With:{" "}
      </Typography>
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
      <a href="https://polygon.io/" target="_blank" rel="noreferrer">
        <img src={polygon} alt="polygonio-logo" />
      </a>
    </Stack>
    <br />

    <Typography level="title-lg" color="inherit" fontSize="1.25em">
      By:{" "}
      <a href="https://github.com/jasperteo" target="_blank" rel="noreferrer">
        <iconify-icon icon="line-md:github-loop"></iconify-icon>
        jasperteo
      </a>
    </Typography>
    <br />
  </div>
);
