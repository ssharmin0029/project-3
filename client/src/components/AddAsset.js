import React, { useEffect, useState } from "react";
import API from "../Utils/API";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function AddAsset() {
  const [symbolList, setSymbolList] = useState([]);
  const [formInputs, setFormInputs] = useState({});
  const data = window.sessionStorage.getItem('isLoggedIn')

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/list?include_platform=false")
      .then((res) => {
        const coinSymbols = res.data.map((data) => {
          return data.symbol;
        });
        const coinNames = res.data.map((data) => {
          return data.name;
        });
        setSymbolList(coinSymbols);

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
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      symbolList.includes(formInputs.symbol) &&
      formInputs.transactionType === "bought"
    ) {
      API.postNewTransaction(formInputs, formInputs.symbol);
    } else if (
      symbolList.includes(formInputs.symbol) &&
      formInputs.transactionType === "sold"
    ) {
      API.postNewSale(formInputs, formInputs.symbol);
    } else {
      window.alert("Please provide a valid symbol");
    }

    document.location.replace("/portfolio");
  };

  const handleInputChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
    console.log(formInputs);
  };

  return (
    <div>
      {data && 
    <div className="container">
      <form className="asset-content">
        <h5 className="asset-title">Asset Transactions</h5>
        <div className="form-group row">
          <fieldset className="form-group">
            <div className="row" onChange={handleInputChange}>
              <legend className="col-form-label col-sm-2 pt-0">
                Type of Transaction
              </legend>
              <div className="col-sm-10" onChange={handleInputChange}>
                <div className="form-check" onChange={handleInputChange}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="transactionType"
                    id="gridRadios1"
                    value="bought"
                    onChange={handleInputChange}
                  />
                  <label class="form-check-label" for="gridRadios1">
                    Bought
                  </label>
                </div>
                <div className="form-check" onChange={handleInputChange}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="transactionType"
                    id="gridRadios2"
                    value="sold"
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" for="gridRadios2">
                    Sold
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        </div>

        <div class="form-group row">
          <label for="symbol" className="col-sm-2 col-form-label">
            Asset Symbol
          </label>
          <div className="col-sm-10">
            <input
              onChange={handleInputChange}
              className="form-control"
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
          <div className="col-sm-10">
            <input
              onChange={handleInputChange}
              className="form-control"
              name="holdings"
              placeholder="Enter the number of tokens you bought/sold"
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="dollarsSpent" className="col-sm-2 col-form-label">
            Dollars Spent
          </label>
          <div className="col-sm-10">
            <input
              onChange={handleInputChange}
              className="form-control"
              name="dollarsSpent"
              placeholder="Enter the amount of USD you spent on this transaction"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-2 col-form-label">
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-outline-light btn-asset"
            >
              Add Transaction
            </button>
          </div>
        </div>
      </form>
    </div> }
    {!data && <Redirect to = '/login' /> }

    </div>
  );
}
