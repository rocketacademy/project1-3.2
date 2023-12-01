import Box from "@mui/system/Box";
import MarketData from "./MarketData";

const TickerCard = (ticker, index) => (
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
      "&:not(:first-of-type)": {
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

export default TickerCard;
