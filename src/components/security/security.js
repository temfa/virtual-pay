import React from "react";
import Button from "../button/button";
import "./security.css";
import SecurityImg from "../../assets/security.svg";

const Security = () => {
  return (
    <div className="security-container">
      <div className="security-text">
        <h2>Top Notch Security on Virtual Pay.</h2>
        <p>We ensure that all personal data and transactions are encrypted, and secured. So what’s is yours remain yours only. </p>
        <Button bgColor="#1C1C1C" text="Get Virtual Pay" />
      </div>
      <div className="security-img">
        <img src={SecurityImg} alt="security" />
      </div>
    </div>
  );
};

export default Security;
