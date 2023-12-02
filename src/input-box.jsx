import TextField from "@mui/material/TextField";

export default function Input(props) {
  return (
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
}
