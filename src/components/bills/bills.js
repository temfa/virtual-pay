import React from "react";
import "./bills.css";
import BillImg from "../../assets/bills-img.png";
import BillLogo from "../../assets/bills-icon.svg";
import Logo from "../logo/logo";
import Button from "../button/button";
const Bills = () => {
  return (
    <div className="bills-container">
      <div className="bills-text">
        <Logo logo={BillLogo} bgColor="#F46036" />
        <h2>Payment of Bills and subscriptions.</h2>
        <p>Ensure a seamless payment platform, where users can pay with naira wallet and the merchants get the equivalent in their currency.</p>
        <Button bgColor="#F46036" text="Learn More" />
      </div>
      <div className="bills-img">
        <img src={BillImg} alt="bills" />
      </div>
    </div>
  );
};

export default Bills;
