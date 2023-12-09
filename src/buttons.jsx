import { Button, ButtonGroup } from "@mui/material";

export function QueryButton({ ticker, setTicker, query }) {
  const SingleButton = (index) => (
    <Button
      key={index}
      index={index}
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
  return (
    <ButtonGroup
      variant="contained"
      aria-label="outlined button group"
      color="grey">
      {[...Array(ticker.length)].map((ignored, index) => SingleButton(index))}
    </ButtonGroup>
  );
}

export function PlusMinusButton({ ticker, setTicker, setError }) {
  return (
    <ButtonGroup variant="text" aria-label="button group" color="inherit">
      {/* Max 6 cards */}
      <Button
        onClick={() =>
          ticker.length < 6 &&
          (setTicker((prev) => [...prev, "AAPL"]),
          setError((prev) => [...prev, null]))
        }>
        <iconify-icon icon="line-md:plus-square-twotone"></iconify-icon>
      </Button>
      {/* Min 2 cards */}
      <Button
        onClick={() =>
          ticker.length > 2 &&
          (setTicker((prev) => prev.toSpliced(-1, 1)),
          setError((prev) => prev.toSpliced(-1, 1)))
        }>
        <iconify-icon icon="line-md:minus-square-twotone"></iconify-icon>
      </Button>
    </ButtonGroup>
  );
}
