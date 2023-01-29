import React from "react";
import "./bills.css";
import BillImg from "../../assets/bills-img-trimmy.png";
import BillLogo from "../../assets/bills-icon.svg";
import OrangeBig from "../../assets/orange-big.svg";
import OrangeSmall from "../../assets/orange-small.svg";
import SmallGrey from "../../assets/small-grey.svg";
import OrangeLeft from "../../assets/orange-left.svg";
import GreyFull from "../../assets/grey-full.svg";
import GreyHalf from "../../assets/grey-half.svg";
import CurvedArrow from "../../assets/curved-arrow.svg";
import Logo from "../logo/logo";
import Button from "../button/button";
const Bills = () => {
  return (
    <div className="bills-cont">
      <img src={OrangeBig} alt="orange" className="orange-big" />
      <img src={OrangeSmall} alt="orange" className="orange-small" />
      <img src={GreyHalf} alt="grey" className="grey-half" />
      <div className="bills-container">
        <div className="bills-text">
          <Logo logo={BillLogo} bgColor="#F46036" />
          <h2>Payment of Bills and subscriptions.</h2>
          <p>Ensure a seamless payment platform, where users can pay with naira wallet and the merchants get the equivalent in their currency.</p>
          <Button bgColor="#F46036" text="Learn More" />
        </div>
        <img src={CurvedArrow} alt="curve" className="curved-arrow" />
        <div className="bills-img">
          <img src={BillImg} alt="bills" />
        </div>
      </div>
      <img src={GreyFull} alt="grey" className="grey-full" />
      <img src={OrangeLeft} alt="orange" className="orange-left" />
      <img src={SmallGrey} alt="small" className="small-grey" />
    </div>
  );
};

export default Bills;
