import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";

export default function Portfolio() {
  const [coinGecko, setCoinGecko] = useState({});
  const history = useHistory();
  const [userCoins, setUserCoins] = useState([]);
  const [fullUserData, setFullUserData] = useState([]);
  const data = window.sessionStorage.getItem('isLoggedIn')


  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        console.log(res.data);
        axios
          .get("/api/coins/")
          .then((res) => {
            console.log(res.data);
            setUserCoins(res.data);
            //deconstruct res.data
          })
          .catch((error) => console.log(error));
        setCoinGecko(res.data);
        //deconstruct res.data
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (userCoins.length > 0) {
      const data = userCoins.map((coin) => {
        console.log(coin);
        const match = coinGecko.filter(
          (cg) => cg.symbol === coin.symbol.toLowerCase()
        )[0];
        console.log(match);
        const obj = {
          ...coin,
          image: match.image,
          price: match.current_price,
        };
        return obj;
      });
      setFullUserData(data);
    }
  }, [userCoins]);


  const addTransaction = () => {
    history.push("/home");
  };

  let totalSum = 0;

  const assetValues = fullUserData.map((data) => {
    return parseFloat(data.price * data.holdings).toFixed(2);
  });

  for (var i = 0; i < assetValues.length; i++) {
    totalSum += +assetValues[i];
  }

  totalSum = parseFloat(totalSum).toFixed(2);

  console.log(assetValues);

  return (
    <div>
      {data && 
      
      <div className="ranking-page">
      <div class="card text-center">
        <div class="card-body value-banner">
          <h4>Total Portfolio Value</h4>
          <p class="card-text port-val">${totalSum}</p>

          <a
            href="#"
            class="btn btn-outline-dark btn-port-val"
            onClick={addTransaction}
          >
            Add Transaction
          </a>
        </div>
      </div>

      <table class="table portfolio-table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Coin</th>
            <th scope="col">Price</th>
            <th scope="col">Holdings</th>
            <th scope="col">Total Value</th>
          </tr>
        </thead>
        {fullUserData.map((data, i) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{i + 1}</th>
                <td>
                  <img className="logos" src={data.image} alt="" />
                </td>
                <td>{data.asset}</td>
                <td>${data.price}</td>
                <td>
                  {data.holdings} {data.symbol}
                </td>
                <td>${parseFloat(data.price * data.holdings).toFixed(2)}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      </div>
    }
    {!data && <Redirect to = '/login'/> }
    </div>
    
  );
}
