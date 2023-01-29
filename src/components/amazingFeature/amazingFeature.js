import React from "react";
import "./amazingFeature.css";
import Felogo from "../../assets/feature-icon.svg";
import Virtual from "../../assets/virtual.png";
import Swap from "../../assets/swap.png";
import VirtualBig from "../../assets/virtual-big.svg";
import VirtualHalf from "../../assets/virtual-half.svg";
import VirtualOrange from "../../assets/virtual-orange.svg";
import Easy from "../../assets/easy.png";
import Logo from "../logo/logo";

const AmazingFeature = () => {
  return (
    <div className="amazing-feature">
      <div className="amazing-logo">
        <Logo logo={Felogo} bgColor="#F46036" />
      </div>
      <h2>Our Amazing Features</h2>
      <p>A multi currency e-wallet that allows you to send and receive FX, spend and send money at the best possible rates, and also payment of Bills.</p>
      <div className="amazing-container">
        <div className="virtual">
          <img src={VirtualBig} alt="big" className="virtual-big" />
          <div className="virtual-cont">
            <img src={Virtual} alt="virtual" />
            <h2>Virtual & Physical Card</h2>
          </div>
          <img src={VirtualHalf} alt="half" className="virtual-half" />
          <img src={VirtualOrange} alt="half" className="virtual-orange" />
        </div>
        <div className="amazing-wrapper">
          <div className="swap">
            <div className="swap-cont">
              <h2>
                Swap, Receive & Send <span>FX</span>
              </h2>
              <img src={Swap} alt="swap" />
            </div>
          </div>
          <div className="easy">
            <div className="easy-cont">
              <img src={Easy} alt="easy" />
              <h2>
                Easy & Fast <span>payment</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazingFeature;
