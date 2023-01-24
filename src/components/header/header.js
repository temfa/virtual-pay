import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <h2>Logo</h2>
      </div>
      <div className="header-wrapper">
        <div className="header-body">
          <div className="header-nav">
            <p className="nav-links">About</p>
            {/* <NavLink to="#features" className="nav-links">
              Features
            </NavLink> */}
            <p className="nav-links">Features</p>
            <p className="nav-links">Payments</p>
            <p className="nav-links">FAQ</p>
            <p className="nav-links">Contact</p>
          </div>
          <button>Get the App</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
