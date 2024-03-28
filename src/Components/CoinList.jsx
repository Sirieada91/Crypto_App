import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CoinList = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd').
        then(res=>res.json()).
        then(data => setCoins(response.data))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Crypto App</h1>
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}): ${coin.current_price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoinList;