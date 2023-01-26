import React from "react";
import "./features.css";
import CNN from "../../assets/cnn.svg";
import BBC from "../../assets/bbc.svg";
import Amazon from "../../assets/amazon.svg";
import Ebay from "../../assets/ebay.svg";
import Forbes from "../../assets/forbes.svg";
import Logo from "../logo/logo";
import Felogo from "../../assets/feature-icon.svg";

const Features = () => {
  return (
    <div className="features-container" id="features">
      <div className="features-icon">
        <Logo logo={Felogo} bgColor="#610c89" />
      </div>
      <h2>As Featured in</h2>
      <div className="features-wrapper">
        <img src={CNN} alt="Logo" />
        <img src={BBC} alt="logo" />
        <img src={Amazon} alt="logo" />
        <img src={Ebay} alt="logo" />
        <img src={Forbes} alt="logo" />
      </div>
    </div>
  );
};

export default Features;
