import React from "react";
import Bills from "../../components/bills/bills";
import Cards from "../../components/cards/cards";
import Faq from "../../components/faq/faq";
import Features from "../../components/features/features";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
// import Money from "../../components/money/money";
// import Security from "../../components/security/security";
// import Trade from "../../components/trade/trade";
import Welcome from "../../components/welcome/welcome";
import "./landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <Header />
      <Welcome />
      <Hero />
      {/* <Money /> */}
      {/* <Trade /> */}
      <Bills />
      {/* <Security /> */}
      <Cards />
      <Faq />
      <Features />
    </div>
  );
};

export default Landing;
