import { TextField, Button } from "@mui/material";

const Input = (props) => (
  <TextField
    error={props.error.some((element) => element !== null)}
    value={props.query}
    onChange={(e) => props.setQuery(e.target.value.toUpperCase())}
    id="tickerInput"
    label="(e.g. AAPL / C:USDSGD / X:BTCUSD)"
    variant="filled"
    placeholder="Type in Stock / FX / Crypto Ticker"
    color="grey"
    sx={{
      width: "21em",
      "*": {
        fontFamily: "Geist Variable !important",
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
    }}>
    Query<iconify-icon icon="line-md:upload-loop"></iconify-icon>
  </Button>
);

export { Input, QueryButton };
