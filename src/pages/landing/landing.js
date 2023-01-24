import React from "react";
import Bills from "../../components/bills/bills";
import Faq from "../../components/faq/faq";
import Features from "../../components/features/features";
import GetStarted from "../../components/getStarted/getStarted";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Money from "../../components/money/money";
import Security from "../../components/security/security";
import Trade from "../../components/trade/trade";
import Welcome from "../../components/welcome/welcome";
import "./landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <Header />
      <Welcome />
      <Features />
      <Hero />
      <Money />
      <Trade />
      <Bills />
      <Security />
      <Faq />
      <GetStarted />
    </div>
  );
};

export default Landing;
