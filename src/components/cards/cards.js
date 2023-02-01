import React from "react";
import "./cards.css";
import BigPhone1 from "../../assets/big-phone-1.png";
import BigPhone2 from "../../assets/big-phone-2.png";
import SmallPhone1 from "../../assets/small-phone-1.png";
import SmallPhone2 from "../../assets/small-phone-2.png";
import cardsIcon from "../../assets/card-icon.svg";
import Button from "../button/button";
import Logo from "../logo/logo";

const Cards = () => {
  return (
    <div className="cards-container">
      <div className="cards-wrapper">
        <div className="cards-cont">
          <div className="cards-img">
            <div className="cards-img-first">
              <img src={SmallPhone1} alt="bigphone" />
              <img src={BigPhone1} alt="bigphone" />
            </div>
            <div className="cards-img-second">
              <img src={BigPhone2} alt="bigphone" />
              <img src={SmallPhone2} alt="bigphone" />
            </div>
          </div>
          <div className="cards-text">
            <div className="cards-logo">
              <Logo bgColor="#610C89" logo={cardsIcon} />
            </div>
            <h2>Get Instant Virtual & Physical card online.</h2>
            <p>Users can create a wallet and link their account & banks easily in like 2mins and get virtual cards issued.</p>
            <Button text="Learn More" bgColor="#610C89" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
