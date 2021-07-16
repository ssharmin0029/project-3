import React, {useEffect, useState} from "react";
import "./App.css";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Chart from "./Utils/charts";
import AddAsset from "./components/AddAsset";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Coin from "./components/Rankings";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import News from "./components/News";
import ThreeScene from "./Utils/threeScene";
import "./assets/css/reset.css";
import "./assets/css/style.css";

import Transaction from "./components/Transaction";


function App() {
  const data = window.sessionStorage.getItem('isLoggedIn')
  const [login, setLogin] = useState('')
  useEffect(() => {
    if(data) {
      setLogin(true)
    } else {
      setLogin(false)
    }
  }, [data])
  return (
    <Router>
      <Route exact path="/" component={ThreeScene}></Route>

      <Route exact path="/home">
        <Nav />
        <AddAsset />
      </Route>
 
     
      <Route exact path="/portfolio"> 
        <Nav />
        <Portfolio />
        <Chart /> 
      </Route>

        
      

      <Route exact path="/rankings">
        <Nav />
        <Coin />
      </Route>

      <Route exact path="/transaction">
        <Transaction/>
      </Route>

      <Route exact path="/signup">
        <Nav />
        <SignUp />
      </Route>

      <Route exact path="/login">
        <Nav />
        <Login />
      </Route>
      <Route exact path="/news">
        <Nav />
        <News />
      </Route>
    </Router>
  );
}

export default App;
