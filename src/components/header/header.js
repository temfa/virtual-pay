import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/header-logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";

const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="header-container">
      <div className="header-cont">
        <div className="header-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div
          className="header-action"
          onClick={() => {
            setClick(!click);
          }}>
          {click ? <FaTimes className="header-times" /> : <FaBars className="header-bars" />}
        </div>
        <div className={click ? "header-nav header-nav-active" : "header-nav"}>
          <p className="nav-links">About</p>
          {/* <Link to="features" className="nav-links">
            Features
          </Link> */}
          <p className="nav-links">Features</p>
          <p className="nav-links">Payments</p>
          <p className="nav-links">FAQ</p>
          <p className="nav-links">Contact</p>
          <button>Get the App</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
