import React from "react";
import "./money.css";
import WoodenHand from "../../assets/wooden-hand.png";

const Money = () => {
  return (
    <div className="money-container">
      <div className="money-wrapper">
        <div className="money-text">
          <h2>
            Send and receive money from <span>anywhere</span> in the world
          </h2>
          <p>Make it super easy for Nigerians and people in the diaspora to send and receive monies in the currency equivalent.</p>
          <button>Get Virtual Pay</button>
        </div>
        <div className="money-img">
          <img src={WoodenHand} alt="money" />
        </div>
      </div>
    </div>
  );
};

export default Money;
