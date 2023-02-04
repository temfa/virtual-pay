import React from "react";
import "./footer.css";
import First from "../../assets/white-spot.svg";
import Second from "../../assets/white-spot2.svg";
import Apple from "../svgComponents/apple/apple";
import Google from "../../assets/Google-Play.svg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="download-container">
        <div className="download-first">
          <img src={First} alt="first" />
        </div>
        <div className="download-middle">
          <h2>Download VirtualPay App, and start enjoying unlimited finance servicies</h2>
          <div className="download-app">
            <div className="app-store">
              <div className="google-play">
                <img src={Google} alt="google" />
                <div>
                  <p>GET IT ON</p>
                  <h2>Google Play</h2>
                </div>
              </div>
              <div className="apple-store">
                <Apple color="white" className="apple-white" />
                <Apple color="black" className="apple-black" />
                <div>
                  <p>AVAILABLE ON THE</p>
                  <h2>Apple Store</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="download-third">
          <img src={Second} alt="first" />
        </div>
      </div>
      <div className="footer-wrapper">
        <div className="footer-cont">
          <div className="footer-text">
            <h2>
              Virtual <span>Pay</span>
            </h2>
            <p>
              Virtual pay is one of such fintechs, Our goal is to present users with a platform the enables them send and receive FX, trade in FX with their local currencies on
              different international marketplace.
            </p>
            <div className="footer-socials">
              <img src={Instagram} alt="instagram" />
              <img src={Facebook} alt="instagram" />
              <img src={Twitter} alt="instagram" />
              <img src={linkedin} alt="instagram" />
            </div>
          </div>
          <div className="footer-link">
            <p>About us</p>
            <p>Features</p>
            <p>Payments</p>
            <p>FAQ</p>
          </div>
          <div className="footer-links">
            <p>Resources</p>
            <p>Supports</p>
            <p>Join Virtual pay community</p>
            <p>USSD directory </p>
            <p>Blog</p>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <p>SINCE 2022</p>
        <p>
          © 2022 COPYRIGHT BY <span>Virtual</span>
          <span>Pay</span>
        </p>
        <p>TERM, PRIVACY POLICY</p>
      </div>
    </div>
  );
};

export default Footer;
