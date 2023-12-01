import { useState, useEffect, useMemo } from "react";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import "./market-data.css";

export default function MarketData({ ticker, error, setError, index }) {
  const [data, setData] = useState(null);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  //error state for individual cards
  const errorIndex = error[index];

  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    //clear out old data and error message to display new data
    setError((prev) => prev.toSpliced(index, 1, null));
    setData(null);
    setDetails(null);
    //start pulling data from API
    setLoading(true);
    const fetchData = async () => {
      try {
        //First API call
        const dataResponse = await axios.get(
          `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?`,
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );
        setData(dataResponse.data);
        //Second API call
        const detailResponse = await axios.get(
          `https://api.polygon.io/v3/reference/tickers/${ticker}`,
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );
        setDetails(detailResponse.data);
      } catch (error) {
        setError((prev) => prev.toSpliced(index, 1, error.message));
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    //why does eslint want me to put index and setError inside dependency array
  }, [ticker, refresh]); //eslint-disable-line

  //clear out old data to display error message
  useEffect(() => {
    setData(null);
    setDetails(null);
  }, [errorIndex]);

  const priceChange = useMemo(
    () =>
      data?.results ? (data.results[0].c - data.results[0].o).toFixed(4) : 0,
    [data]
  );

  const priceChangePercent = useMemo(
    () =>
      data?.results
        ? (
            (100 * (data.results[0].c - data.results[0].o)) /
            data.results[0].c
          ).toFixed(2)
        : 0,
    [data]
  );

  return (
    <div className="data">
      <div id="refresh">
        <IconButton aria-label="refresh" onClick={() => setRefresh(!refresh)}>
          <iconify-icon icon="line-md:rotate-270"></iconify-icon>
        </IconButton>
      </div>
      {loading && <LoadingMessage />}
      {errorIndex && <ErrorMessage errorIndex={errorIndex} />}
      {details && data?.results && (
        <DataDetailMessage
          data={data}
          details={details}
          priceChange={priceChange}
          priceChangePercent={priceChangePercent}
          API_KEY={API_KEY}
        />
      )}
    </div>
  );
}

const LoadingMessage = () => (
  <div className="errorAndLoading">
    <br />
    Loading... <iconify-icon icon="line-md:loading-twotone-loop"></iconify-icon>
    <br />
  </div>
);

const ErrorMessage = ({ errorIndex }) => (
  <div className="errorAndLoading">
    <br />
    <iconify-icon icon="line-md:alert-circle-twotone"></iconify-icon>
    {errorIndex} <br />
  </div>
);

const DataDetailMessage = ({
  data,
  details,
  priceChange,
  priceChangePercent,
  API_KEY,
}) => (
  <>
    <br />
    {/* Render data here */}
    <ul>
      <li>
        {/* Name, also check for url */}
        <iconify-icon icon="fluent-mdl2:rename"></iconify-icon>:{" "}
        {(details?.results?.homepage_url && (
          <a
            href={details.results.homepage_url}
            target="_blank"
            rel="noreferrer"
          >
            {details.results.name}
          </a>
        )) ??
          details.results.name}
      </li>
      <li>
        {/* Ticker Name */}
        <iconify-icon icon="material-symbols:currency-exchange-rounded"></iconify-icon>
        : {data.ticker}
      </li>
      <li>
        {" "}
        {/* Closing Price */}
        <iconify-icon icon="material-symbols:price-change-outline-rounded"></iconify-icon>
        : {data.results[0].c.toFixed(2)}{" "}
        {details.results.currency_name.toUpperCase()}
      </li>
      <li>
        {" "}
        {/* downtrend-arrow if negative, else uptrend */}
        {priceChange <= 0 ? (
          <iconify-icon icon="fluent:arrow-trending-down-24-filled"></iconify-icon>
        ) : (
          <iconify-icon icon="fluent:arrow-trending-24-filled"></iconify-icon>
        )}
        : {priceChangePercent}% (${priceChange})
      </li>
      <li>
        {" "}
        {/* check if logo exist */}
        {details?.results?.branding && (
          <img
            className="stockLogo"
            src={`${details.results.branding.logo_url}?apiKey=${API_KEY}`}
            alt="icon"
          />
        )}
      </li>
    </ul>
    <br />
  </>
);
