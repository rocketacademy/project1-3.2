import React, { useState, useEffect } from "react";
import axios from "axios";

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

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && details && (
        <div>
          {/* Render your data here */}
          <div className="stockCard">
            <p>Name: {details.results.name}</p>
            <p>Ticker: {data.ticker}</p>
            <p>Price: ${data.results[0].c.toFixed(2)}</p>
            <p>
              Percentage Change:{" "}
              {(
                (100 * (data.results[0].c - data.results[0].o)) /
                data.results[0].c
              ).toFixed(2)}
              %
            </p>
            <img
              src={`${details.results.branding.logo_url}?apiKey=${API_KEY}`}
              alt="icon"
              width="192rem"
            />
          </div>

          <code>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <pre>{JSON.stringify(details, null, 2)}</pre>
          </code>
        </div>
      )}
    </div>
  );
};

export default MarketData;
