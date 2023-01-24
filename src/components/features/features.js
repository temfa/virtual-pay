import React from "react";
import "./features.css";
import CNN from "../../assets/cnn.svg";
import BBC from "../../assets/bbc.svg";
import Amazon from "../../assets/amazon.svg";
import Ebay from "../../assets/ebay.svg";
import Forbes from "../../assets/forbes.svg";

const Features = () => {
  return (
    <div className="features-container" id="features">
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
