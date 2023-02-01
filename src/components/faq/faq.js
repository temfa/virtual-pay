import React from "react";
import FaqSingle from "../faqSingle/faqSingle";
import "./faq.css";
import FaqIcon from "../../assets/faq-icon.svg";
import Logo from "../logo/logo";

const Faq = () => {
  const data = [
    { question: "Is Virtual pay PRD Secure?", reply: "" },
    { question: "What can Virtual  pay PRD do?", reply: "" },
    { question: "Who build Virtual  pay PRD?", reply: "" },
    { question: "What languages does Virtual pay PRD support?", reply: "" },
    { question: "Does Virtual charge free?", reply: "" },
    { question: "How long does it take for a  transfer to reflect  ?", reply: "" },
    { question: "Where can I use my generated  Virtual card? ", reply: "" },
  ];
  return (
    <div className="faq-wrapper" id="faq">
      <div className="faq-container">
        <div className="faq-icon">
          <Logo logo={FaqIcon} bgColor="#f46036" />
        </div>
        <h2>Frequently asked questions </h2>
        <p>Get answers to all the questions you have and boost your knowledge about Virtual Pay PRD </p>
        <div className="faq-cont">
          {data?.map((item, index) => {
            return <FaqSingle question={item.question} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
