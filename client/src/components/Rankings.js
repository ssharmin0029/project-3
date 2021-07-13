import React, { useState, useEffect } from "react";
import axios from "axios";
import { indexOf } from "lodash";
import './rankings.css';

function Rankings() {
  // const [search, setSearch] = useState('')
  const [coin, setCoin] = useState([]);
  // const filteredCoins = coin.filter(coin =>
  //     coin.name.toLowerCase().includes(search.toLowerCase())
  //     )

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

  // const handleChange = e => {
  //     setSearch(e.target.value)
  // }

  return (
    <div className="ranking-page">
      {/* <div className="coin-search">
                <h1 className="coin-text">Search a Currency</h1>
                <form>
                    <input type="text" placeholder="search" className="coin-input"/>
                </form>
            </div> */}
      {console.log(coin)}
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Coin</th>
            <th scope="col">Symbol</th>
            <th scope="col">Price</th>
            <th scope="col">Volume</th>
          </tr>
        </thead>
        {coin.map((data, i) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{i+1}</th>
                <td>
                  <img className="logos" src={data.image} />
                </td>
                <td>{data.name}</td>
                <td>{data.symbol}</td>
                <td>${data.current_price}</td>
                <td>{data.total_volume}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      {/*                 
                // <div>
                //     <img src={data.image}/> 
                //     {data.name}, 
                //     {data.symbol}, 
                //     {data.current_price}, 
                //     {data.total_volume}
                // </div> */}

      {/* {filteredCoins.map(coin => {
                return (
                    <Assets
                        key={coin.id} 
                        name={coin.name} 
                        image={coin.image} 
                        symbol={coin.symbol} 
                        volume={coin.volume}
                        price={coin.price}>    
                    </Assets>
                )
            })} */}
      {/* <div className="coin-container">
                <div className="coin-row">
                    <div className="coin">
                        <img src={image} alt="coin-image"/>
                        <h1>{name}</h1>
                        <p className="coin-symbol">{symbol}</p>
                    </div>
                    <div className="coin-data">
                        <p className="coin-price">${price}</p>
                        <p className="coin-volume">${volume.toLocaleString()}</p>

                    </div>
                </div>
            </div> */}
    </div>
  );
}

export default Rankings;
