import React from "react";

import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Nav() {
  const data = sessionStorage.getItem("isLoggedIn");

  const logout = async () => {
    const response = await axios.post("/api/users/logout");

    if (response) {
      sessionStorage.setItem("isLoggedIn", false);
      sessionStorage.clear();
      document.location.reload();
    }
  };

  return (
    <nav className="navbar-light bg-light shadow-lg p-3 nav-content">
      <div className="container-fluid">
        <ul className="nav nav-tabs justify-content-end nav-content-list">
          <li className="nav-item">
            <a href="/" className="nav-link" activeClassName="nav-link active">
              My Coin
            </a>
          </li>
        {data &&  
        <li className="nav-item">
            <NavLink
              exact
              to="/portfolio"
              className="nav-link"
              activeClassName="nav-link active"
            >
              My Portfolio
            </NavLink>
          </li>}
         

          <li className="nav-item">
            <NavLink
              exact
              to="/rankings"
              className="nav-link"
              activeClassName="nav-link active"
            >
              Coin Rankings
            </NavLink>
          </li>
          {data && (
            <li className="nav-item">
              <NavLink
                exact
                to="/transaction"
                className="nav-link"
                activeClassName="nav-link active"
              >
                My Transactions
              </NavLink>
            </li>
          )}

          <li className="nav-item">
            <NavLink
              exact
              to="/news"
              className="nav-link"
              activeClassName="nav-link active"
            >
              News
            </NavLink>
          </li>
          {!data && (
            <li className="nav-item">
              <NavLink exact to="/signup">
                <button className="btn btn-outline-dark btn-nav" href="/signup">
                  Sign Up
                </button>
              </NavLink>
            </li>
          )}

          {!data && (
            <li className="nav-item">
              <NavLink exact to="/login">
                <button className="btn btn-outline-dark btn-nav">
                  Sign In
                </button>
              </NavLink>
            </li>
          )}
          {data && (
            <li className="nav-item">
              <button className="btn btn-outline-dark btn-nav" onClick={logout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
