import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Price(props) {
  const [coin, setCoin] = useState(null);

  const params = useParams();
  const { symbol } = params;

  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apiKey=${process.env.REACT_APP_COINAPI_KEY}`;

  const getCoin = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCoin(data);
    } catch (e) {
      console.log("ERROR FETCHING DATA", e);
    }
  };

  // runs as soon as the component mounts
  useEffect(() => {
    getCoin();
  }, []);

  // show the fetched data
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // show a loading message
  const loading = () => <h1>Loading...</h1>;

  return coin && coin.rate ? loaded() : loading();
}
