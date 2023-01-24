import React from "react";
import Button from "../button/button";
import "./bills.css";
import Card from "../../assets/card.svg";
const Bills = () => {
  return (
    <div className="bills-container">
      <div className="bills-wrapper">
        <div className="bills-text">
          <h2>Payment of Bills and subscriptions.</h2>
          <p>Ensure a seamless payment platform, where users can pay with Naira wallet and the merchants get the equivalent in their currency.</p>
          <Button text="Learn More" bgColor=" #610C89" />
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card-details">
          <img src={Card} alt="card" />
          <div className="card-text">
            <h2>Get Instant Virtual card online.</h2>
            <p>Users can create a wallet and link their account & banks easily in like 2mins and get virtual cards issued.</p>
            <Button text="Learn More" bgColor=" #FF6666" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bills;
