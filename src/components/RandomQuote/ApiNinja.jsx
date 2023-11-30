import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiNinja = () => {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const apiKey = "1naX24kV6w8xEHsS9W4vYw==gz8Kl5FF27xnEfjY";
    const category = "happiness";
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

    axios
      .get(url, {
        headers: {
          "X-Api-Key": apiKey,
        },
      })
      .then((response) => {
        setQuotes(response.data);
      })
      .catch((error) => {
        if (error.response) {
          setError(`Error: ${error.response.status} - ${error.response.data}`);
        } else if (error.request) {
          setError("Error: No response received from server");
        } else {
          setError("Error: " + error.message);
        }
      });
      }, []);

    return (
      <div>
        <h1>From API Ninja:</h1>
        {error ? <p>{error}</p> : null}
        <ul>
          {quotes.map((quote, index) => (
            <li key={index}>{quote.quote}</li>
          ))}
        </ul>
      </div>
    );
};

export default ApiNinja;
