import React from "react";
import AmazingFeature from "../../components/amazingFeature/amazingFeature";
import Bills from "../../components/bills/bills";
import Cards from "../../components/cards/cards";
import Faq from "../../components/faq/faq";
import Features from "../../components/features/features";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Testimonials from "../../components/testimonials/testimonials";
import Welcome from "../../components/welcome/welcome";
import Chat from "../../assets/chat.svg";
import "./landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <Header />
      <Welcome />
      <AmazingFeature />
      <Hero />
      <Bills />
      <Cards />
      <Faq />
      <Features />
      <Testimonials />
      <Footer />
      <div className="chat-cont">
        <img src={Chat} alt="chat" />
      </div>
    </div>
  );
};

export default Landing;
