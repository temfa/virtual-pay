import React from "react";
// import { NavLink } from "react-router-dom";
import "./header.css";
import Logo from "../../assets/header-logo.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-cont">
        <div className="header-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="header-wrapper">
          <div className="header-nav">
            <p className="nav-links">About</p>
            {/* <NavLink to="#features" className="nav-links">
              Features
            </NavLink> */}
            <p className="nav-links">Features</p>
            <p className="nav-links">Payments</p>
            <p className="nav-links">FAQ</p>
            <p className="nav-links">Contact</p>
            <button>Get the App</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
