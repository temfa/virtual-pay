import React from "react";
import "./welcome.css";
import WelcomePhone from "../../assets/welcome-phone.png";
import WelcomeCard from "../../assets/welcome-card.png";
import Apple from "../../assets/apple.svg";
import Google from "../../assets/Google-Play.svg";
import Line from "../../assets/line.svg";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-wrapper">
        <div className="welcome-text">
          <h2>
            Make <span className="span-first">Payment</span> and money move without <span className="span-second">stress</span>
          </h2>
          <img src={Line} alt="line" />
          <p>Virtual Pay PRD is a simple and secure way to send and receive money the fast and easy way. Instantly transfer between your accounts both local and international</p>
          <div className="app-store">
            <div className="google-play">
              <img src={Google} alt="google" />
              <div>
                <p>GET IT ON</p>
                <h2>Google Play</h2>
              </div>
            </div>
            <div className="apple-store">
              <img src={Apple} alt="apple" />
              <div>
                <p>AVAILABLE ON THE</p>
                <h2>Apple Store</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="welcome-img">
          <div className="welcome-img-cont">
            <img src={WelcomeCard} alt="welcome" className="welcome-card" />
            <img src={WelcomePhone} alt="welcome" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
