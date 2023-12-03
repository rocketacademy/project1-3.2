import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
// import useSWR from "swr";
// import { useQuery } from "@tanstack/react-query";
import "./market-data.css";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function MarketData({ ticker, error, setError, index }) {
  const [pulledData, setPulledData] = useState(null);
  const [pulledDetails, setPulledDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const errorIndex = error[index];

  // Pull data when user requests or refreshes
  useEffect(() => {
    //Pull data
    const fetchDataDetails = async () => {
      try {
        //First API call
        const pulledDataResponse = await axios.get(
          `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?`,
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );
        setPulledData(pulledDataResponse.data);
        //Second API call
        const pulledDetailResponse = await axios.get(
          `https://api.polygon.io/v3/reference/tickers/${ticker}`,
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );
        setPulledDetails(pulledDetailResponse.data);
      } catch (error) {
        setError((prev) => prev.toSpliced(index, 1, error.message));
      } finally {
        setLoading(false);
      }
    };
    fetchDataDetails();
    return () => {
      //Clear old error
      setError((prev) => prev.toSpliced(index, 1, null));
      //Initiate loading animation
      setPulledData(null);
      setPulledDetails(null);
      setLoading(true);
    };
  }, [ticker, refresh]);

  //Clear old data upon error
  useEffect(() => {
    setPulledData(null);
    setPulledDetails(null);
  }, [errorIndex]);

  return (
    <div className="data">
      <div id="refresh-button">
        <IconButton
          key={refresh} //trick to re-render the button for animation
          aria-label="refresh"
          onClick={() => setRefresh(!refresh)}>
          <iconify-icon icon="line-md:rotate-270"></iconify-icon>
        </IconButton>
      </div>
      <br />
      {loading && <LoadingMessage />}
      {errorIndex && <ErrorMessage errorIndex={errorIndex} />}
      {pulledDetails && pulledData?.results && (
        <DataDetailMessage
          pulledData={pulledData}
          pulledDetails={pulledDetails}
          API_KEY={API_KEY}
        />
      )}
    </div>
  );
}

const LoadingMessage = () => (
  <div className="error-loading">
    <br />
    Loading... <iconify-icon icon="line-md:loading-twotone-loop"></iconify-icon>
    <br />
  </div>
);

const ErrorMessage = ({ errorIndex }) => (
  <div className="error-loading">
    <br />
    <iconify-icon icon="line-md:alert-circle-twotone"></iconify-icon>
    {errorIndex} <br />
  </div>
);

const DataDetailMessage = ({ pulledData, pulledDetails, API_KEY }) => {
  const Name = () => (
    <li>
      {/* Name, also check for url */}
      <iconify-icon icon="fluent-mdl2:rename"></iconify-icon>:{" "}
      {pulledDetails?.results?.homepage_url ? (
        <a
          href={pulledDetails.results.homepage_url}
          target="_blank"
          rel="noreferrer">
          {pulledDetails.results.name}
        </a>
      ) : (
        pulledDetails.results.name
      )}
    </li>
  );

  const TickerName = () => (
    <li>
      {/* Ticker Name */}
      <iconify-icon icon="material-symbols:currency-exchange-rounded"></iconify-icon>
      : {pulledData.ticker}
    </li>
  );

  const Price = () => (
    <li>
      {/* Closing Price */}
      <iconify-icon icon="material-symbols:price-change-outline-rounded"></iconify-icon>
      : {pulledData.results[0].c.toFixed(2)}{" "}
      {pulledDetails.results.currency_name.toUpperCase()}
    </li>
  );

  const priceChange = (
    pulledData.results[0].c - pulledData.results[0].o
  ).toFixed(4);
  const priceChangePercent = (
    (100 * (pulledData.results[0].c - pulledData.results[0].o)) /
    pulledData.results[0].c
  ).toFixed(2);

  const Delta = () => (
    <li>
      {/* Downtrend-arrow if negative, else uptrend */}
      {priceChange <= 0 ? (
        <iconify-icon
          icon="material-symbols:trending-down-rounded"
          style={{ color: "#d1001c" }}></iconify-icon>
      ) : (
        <iconify-icon
          icon="material-symbols:trending-up-rounded"
          style={{ color: "#0e7a0d" }}></iconify-icon>
      )}
      : {priceChangePercent}% (${priceChange})
    </li>
  );

  const Logo = () => (
    <li
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "-2em",
      }}>
      {/* Check if logo exist */}
      {pulledDetails?.results?.branding?.logo_url && (
        <img
          className="stockLogo"
          src={`${pulledDetails.results.branding.logo_url}?apiKey=${API_KEY}`}
          alt="logo"
        />
      )}
    </li>
  );

  return (
    <>
      <ul>
        <Name />
        <TickerName />
        <Price />
        <Delta />
        <Logo />
      </ul>
    </>
  );
};
