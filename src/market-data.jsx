import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
import "./market-data.css";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function MarketData({ ticker, error, setError, index }) {
  const [pulledData, setPulledData] = useState(null);
  const [pulledDetails, setPulledDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const errorIndex = error[index];

  //Pull data when user requests or refreshes
  useEffect(() => {
    setError((prev) => prev.toSpliced(index, 1, null));
    setPulledData(null);
    setPulledDetails(null);
    setLoading(true);
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
  }, [ticker, refresh]); //eslint-disable-line

  //Clear old data upon error
  useEffect(() => {
    setPulledData(null);
    setPulledDetails(null);
  }, [errorIndex]);

  const priceChange =
    pulledData?.results &&
    (pulledData.results[0].c - pulledData.results[0].o).toFixed(4);

  const priceChangePercent =
    pulledData?.results &&
    (
      (100 * (pulledData.results[0].c - pulledData.results[0].o)) /
      pulledData.results[0].c
    ).toFixed(2);

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
      {loading && <LoadingMessage />}
      {errorIndex && <ErrorMessage errorIndex={errorIndex} />}
      {pulledDetails && pulledData?.results && (
        <DataDetailMessage
          pulledData={pulledData}
          pulledDetails={pulledDetails}
          priceChange={priceChange}
          priceChangePercent={priceChangePercent}
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

const DataDetailMessage = ({
  pulledData,
  pulledDetails,
  priceChange,
  priceChangePercent,
  API_KEY,
}) => (
  <>
    <br />
    <ul>
      <li>
        {/* Name, also check for url */}
        <iconify-icon icon="fluent-mdl2:rename"></iconify-icon>:{" "}
        {(pulledDetails?.results?.homepage_url && (
          <a
            href={pulledDetails.results.homepage_url}
            target="_blank"
            rel="noreferrer">
            {pulledDetails.results.name}
          </a>
        )) ??
          pulledDetails.results.name}
      </li>
      <li>
        {/* Ticker Name */}
        <iconify-icon icon="material-symbols:currency-exchange-rounded"></iconify-icon>
        : {pulledData.ticker}
      </li>
      <li>
        {/* Closing Price */}
        <iconify-icon icon="material-symbols:price-change-outline-rounded"></iconify-icon>
        : {pulledData.results[0].c.toFixed(2)}{" "}
        {pulledDetails.results.currency_name.toUpperCase()}
      </li>
      <li>
        {/* Downtrend-arrow if negative, else uptrend */}
        {priceChange <= 0 ? (
          <iconify-icon
            icon="fluent:arrow-trending-down-24-filled"
            style={{ color: "#d1001c" }}></iconify-icon>
        ) : (
          <iconify-icon
            icon="fluent:arrow-trending-24-filled"
            style={{ color: "#0e7a0d" }}></iconify-icon>
        )}
        : {priceChangePercent}% (${priceChange})
      </li>
      <li
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "-2em",
        }}>
        {/* Check if logo exist */}
        {pulledDetails?.results?.branding && (
          <img
            className="stockLogo"
            src={`${pulledDetails.results.branding.logo_url}?apiKey=${API_KEY}`}
            alt="logo"
          />
        )}
      </li>
    </ul>
    <br />
  </>
);
