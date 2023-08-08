import { useEffect } from "react";

export default function Display() {

    useEffect(() => {
        const getData = async () => {
            const res = await fetch('https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=');
            const data = await res.json();
            console.log(data);
        }
        getData();
    }, [])



  return (
    <div>
      <h1>display</h1>
    </div>
  );
}
