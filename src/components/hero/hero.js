import React from "react";
import "./hero.css";
import Video from "../../assets/video.png";
import HeroLogo from "../../assets/hero-logo.svg";
import Logo from "../logo/logo";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="hero-logo">
          <Logo logo={HeroLogo} bgColor="#610C89" />
        </div>
        <h2>How Virtual Pay PRD Works</h2>
        <p>Here is a video guide on how Virtual Pay PRD Works.</p>
        <img src={Video} alt="video" />
      </div>
    </div>
  );
};

export default Hero;
