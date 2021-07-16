import React, { useState, useEffect } from "react";
import axios from "axios";

function Rankings() {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        console.log(res.data);
        setCoin(res.data);
        //deconstruct res.data
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(setCoin);

  return (
    <div className="market-cap-rankings">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Coin</th>
            <th scope="col">Symbol</th>
            <th scope="col">Price</th>
            <th scope="col">Market Cap</th>
            <th scope="col">Volume</th>
          </tr>
        </thead>
        {coin.map((data, i) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{i + 1}</th>
                <td>
                  <img className="logos" src={data.image} alt="" />
                </td>
                <td>{data.name}</td>
                <td>{data.symbol}</td>
                <td>${data.current_price}</td>
                <td>${data.market_cap}</td>
                <td>{data.total_volume}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Rankings;
