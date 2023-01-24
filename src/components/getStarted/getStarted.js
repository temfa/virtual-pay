import React from "react";
import "./getStarted.css";
import WelcomeImg from "../../assets/welcome.png";

const GetStarted = () => {
  return (
    <div className="get-started">
      <div className="get-wrapper">
        <div className="get-img">
          <img src={WelcomeImg} alt="welcome" />
        </div>
        <div className="get-text">
          <h2>Get started in 3 easy steps</h2>
          <div className="get-steps">
            <div className="get-step">
              <div className="get-number">
                <p>1</p>
              </div>
              <div className="get-item">
                <p>Download Virtual Pay PRD</p>
                <p>Download the Virtual Pay PRD mobile App for your Android or iOS device. </p>
              </div>
            </div>
            <div className="get-step">
              <div className="get-number">
                <p>2</p>
              </div>
              <div className="get-item">
                <p>Complete KYC Information</p>
                <p>Complete KYC verification within the app</p>
              </div>
            </div>
            <div className="get-step">
              <div className="get-number">
                <p>3</p>
              </div>
              <div className="get-item">
                <p>Start Transacting</p>
                <p>Start sending an receiving money from friends and familiy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
