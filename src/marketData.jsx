import React, { useState, useEffect } from "react";
import axios from "axios";

const MarketData = ({ ticker }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = "7M_4Op4aK53QJDYuqbJEYoV1o_qkm3Uf";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true`,
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
        setData(response.data);
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
      {data && (
        <div>
          {/* Render your data here */}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MarketData;

// "https://api.tiingo.com/tiingo/daily/AAPL/prices?token=dfa55e4b8cf8ac48ef973de7ac2e91caee426f1d",
//   {
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//   };
