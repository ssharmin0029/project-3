import React, { useEffect, useState } from "react";
import API from "../Utils/API";
// import {useParams} from 'react-router-dom'
import axios from "axios";

export default function AddAsset() {
  const [symbolList, setSymbolList] = useState([]);
  // const [ coinMap, setCoinMap ] = useState({});
  const [formInputs, setFormInputs] = useState({});
  // const {symbol} = useParams()

  useEffect(() => {
    console.log("test");
    axios
      .get("https://api.coingecko.com/api/v3/coins/list?include_platform=false")
      .then((res) => {
        console.log(res.data);
        // const coinMap = res.data.reduce( (acc, coin) => ({ ...acc, [coin.symbol]: coin.name }), {})
        const coinSymbols = res.data.map((data) => {
          return data.symbol;
        });
        const coinNames = res.data.map((data) => {
          return data.name;
        });
        // setCoinMap(coinMap);
        // console.log(coinMap)
        setSymbolList(coinSymbols);
        // console.log(coinSymbols)
        // console.log(coinNames)

        var symbolNameArray = {};
        for (var i = 0; i < coinSymbols.length; i++) {
          var id = coinSymbols[i];
          var count = coinNames[i];
          if (symbolNameArray[id] === undefined) {
            symbolNameArray[id] = count;
          } else {
            symbolNameArray[id] += count;
          }
        }

        console.log(symbolNameArray);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInputs)
    
  //   if (!symbolList.includes(formInputs.symbol)) {
  //     window.alert("Please provide a valid symbol");
  //   } else if (formInputs.value === "bought") {
  //     API.postNewTransaction(formInputs, formInputs.symbol);
  //   } else if (formInputs.value === "sold") {
  //     API.postNewSale(formInputs, formInputs.symbol);
  //   };
  // }
    if ((symbolList.includes(formInputs.symbol)) && (formInputs.transactionType === "bought")) {
      API.postNewTransaction(formInputs, formInputs.symbol);
    } else if ((symbolList.includes(formInputs.symbol)) && (formInputs.transactionType === "sold")) {
      API.postNewSale(formInputs, formInputs.symbol);
    } else {
      window.alert("Please provide a valid symbol");
    }
    
    document.location.replace('/portfolio')
  }

  const handleInputChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
    console.log(formInputs)
  };

  return (
    <div>
      <form>
        <div class="form-group row">
        <fieldset class="form-group">
    <div class="row" onChange={handleInputChange}>
      <legend class="col-form-label col-sm-2 pt-0">Type of Transaction</legend>
      <div class="col-sm-10" onChange={handleInputChange}>
        <div class="form-check" onChange={handleInputChange}>
          <input class="form-check-input" type="radio" name="transactionType" id="gridRadios1" value="bought" onChange={handleInputChange}/>
          <label class="form-check-label" for="gridRadios1">
            Bought
          </label>
        </div>
        <div class="form-check" onChange={handleInputChange}>
          <input class="form-check-input" type="radio" name="transactionType" id="gridRadios2" value="sold" onChange={handleInputChange}/>
          <label class="form-check-label" for="gridRadios2">
            Sold
          </label>
        </div>
      </div>
    </div>
  </fieldset>
        </div>

        <div class="form-group row">
          <label for="symbol" class="col-sm-2 col-form-label">
            Asset Symbol
          </label>
          <div class="col-sm-10">
            <input
              onChange={handleInputChange}
              class="form-control"
              name="symbol"
              placeholder="Enter the coin's symbol in lowercase (e.g. for Bitcoin, enter btc)"
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="asset" className="col-sm-2 col-form-label">
            Asset Name
          </label>
          <div className="col-sm-10">
            <input
              onChange={handleInputChange}
              className="form-control"
              name="asset"
              placeholder="Enter the name of the crypto"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="holdings" class="col-sm-2 col-form-label">
            Amount Bought/Sold
          </label>
          <div class="col-sm-10">
            <input
              onChange={handleInputChange}
              class="form-control"
              name="holdings"
              placeholder="Enter the number of tokens you bought/sold"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="dollarsSpent" class="col-sm-2 col-form-label">
            Dollars Spent
          </label>
          <div class="col-sm-10">
            <input
              onChange={handleInputChange}
              class="form-control"
              name="dollarsSpent"
              placeholder="Enter the amount of USD you spent on this transaction"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-2 col-form-label">
            <button
              onClick={handleSubmit}
              type="submit"
              class="btn btn-primary"
            >
              Add Transaction
            </button>
          </div>
        </div>
      </form>
    </div>
  );
  }
