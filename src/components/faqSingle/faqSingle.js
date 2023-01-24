import React from "react";
import "./faqSingle.css";
import Dropdown from "../../assets/dropdown.svg";

const FaqSingle = ({ question }) => {
  return (
    <div className="faq-single">
      <h3>{question}</h3>
      <img src={Dropdown} alt="dropdown" />
    </div>
  );
};

export default FaqSingle;
