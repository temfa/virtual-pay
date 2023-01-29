import React from "react";
import "./testimonials.css";
import FaqIcon from "../../assets/faq-icon.svg";
import Logo from "../logo/logo";

const Testimonials = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-logo">
        <Logo logo={FaqIcon} bgColor="#F46036" />
      </div>
      <h2>Testimonial</h2>
      <p>Don't just take our word for it - see what actual users of our service have to say about their experience.</p>
    </div>
  );
};

export default Testimonials;
