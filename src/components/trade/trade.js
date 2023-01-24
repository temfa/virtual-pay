import React from "react";
import "./trade.css";
import TradeImg from "../../assets/trade-coins.png";

const Trade = () => {
  return (
    <div className="trade-container">
      <div className="trade-wrapper">
        <div className="trade-text">
          <h2>
            <span>Trade in FX!</span> <br /> Transfer and Get FX,
          </h2>
          <p>Nigerians find it super difficult to access foreign currencies and to trade or exchange them with their local currencies on different international marketplace.</p>
          <button>Get Virtual Pay</button>
        </div>
        <div className="trade-img">
          <img src={TradeImg} alt="trade" />
        </div>
      </div>
    </div>
  );
};

export default Trade;
