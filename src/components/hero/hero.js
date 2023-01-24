import React from "react";
import "./hero.css";
import Video from "../../assets/video.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <h2>The Financial Hero App</h2>
        <p>A multi currency e-wallet that allows you to send and receive FX, spend and send money at the best possible rates, and also payment of Bills.</p>
        <img src={Video} alt="video" />
      </div>
    </div>
  );
};

export default Hero;
