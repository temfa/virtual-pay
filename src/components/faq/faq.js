import React from "react";
import FaqSingle from "../faqSingle/faqSingle";
import "./faq.css";

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
    <div className="faq-wrapper">
      <div className="faq-container">
        <h2>Frequently asked questions </h2>
        <p>Get answers to all the questions you have and boost your knowledge about Virtual Pay PRD </p>
        <div className="faq-cont">
          {data?.map((item, index) => {
            return <FaqSingle question={item.question} key={index} />;
          })}
          <h2>View all</h2>
        </div>
      </div>
    </div>
  );
};

export default Faq;
