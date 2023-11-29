import React, { useState, useEffect } from "react";
import axios from "axios";
import "./marketData.css";

const MarketData = ({ ticker }) => {
  const [data, setData] = useState(null);
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = "7M_4Op4aK53QJDYuqbJEYoV1o_qkm3Uf";

  useEffect(() => {
    const fetchData = async () => {
      try {
        //First API call
        const marketDataResponse = await axios.get(
          `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true`,
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );
        setData(marketDataResponse.data);
        //Second API call
        const tickerResponse = await axios.get(
          `https://api.polygon.io/v3/reference/tickers/${ticker}`,
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );
        setDetails(tickerResponse.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [ticker]);

  const priceChange =
    data && (data.results[0].c - data.results[0].o).toFixed(2);
  const priceChangePercent =
    data &&
    (
      (100 * (data.results[0].c - data.results[0].o)) /
      data.results[0].c
    ).toFixed(2);

  return (
    <div>
      {loading && (
        <code>
          Loading...
          <iconify-icon icon="line-md:loading-twotone-loop"></iconify-icon>
        </code>
      )}
      {error && (
        <code>
          Error: {error}
          <iconify-icon icon="carbon:data-error"></iconify-icon>
        </code>
      )}
      {data && details && (
        <div>
          {/* Render your data here */}
          <div className="card">
            <p>
              <iconify-icon icon="fluent-mdl2:rename"></iconify-icon>:{" "}
              {details.results.name}
            </p>
            <p>
              <iconify-icon icon="material-symbols:currency-exchange"></iconify-icon>
              : {data.ticker}
            </p>
            <p>
              <iconify-icon icon="material-symbols:price-change-outline-rounded"></iconify-icon>
              : ${data.results[0].c.toFixed(2)}
            </p>
            <p>
              {priceChange < 0 ? (
                <iconify-icon icon="ic:twotone-trending-down"></iconify-icon>
              ) : (
                <iconify-icon icon="ic:twotone-trending-up"></iconify-icon>
              )}
              : {priceChangePercent}% (${priceChange})
            </p>
            <img
              className="stockLogo"
              src={`${details.results.branding.logo_url}?apiKey=${API_KEY}`}
              alt="icon"
            />
          </div>
          {/* <code>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <pre>{JSON.stringify(details, null, 2)}</pre>
          </code> */}
        </div>
      )}
    </div>
  );
};

export default MarketData;
