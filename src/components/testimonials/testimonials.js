import React, { useRef } from "react";
import "./testimonials.css";
import FaqIcon from "../../assets/faq-icon.svg";
import Logo from "../logo/logo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestifierLogo from "../../assets/testimonial.svg";
import Star from "../../assets/star.svg";
import Testifier from "../../assets/testifier.png";

const Testimonials = () => {
  const testimonies = [
    {
      name: "Jacob Jones",
      position: "Marketing Coordinator",
      testimonies: "I would recommend Virtual Pay for anyone trying to send and receive money anywhere in the word. It has saved me so much time!",
    },
    {
      name: "Jacob Jones",
      position: "Marketing Coordinator",
      testimonies: "I would recommend Virtual Pay for anyone trying to send and receive money anywhere in the word. It has saved me so much time!",
    },
    {
      name: "Jacob Jones",
      position: "Marketing Coordinator",
      testimonies: "I would recommend Virtual Pay for anyone trying to send and receive money anywhere in the word. It has saved me so much time!",
    },
    {
      name: "Jacob Jones",
      position: "Marketing Coordinator",
      testimonies: "I would recommend Virtual Pay for anyone trying to send and receive money anywhere in the word. It has saved me so much time!",
    },
    {
      name: "Jacob Jones",
      position: "Marketing Coordinator",
      testimonies: "I would recommend Virtual Pay for anyone trying to send and receive money anywhere in the word. It has saved me so much time!",
    },
  ];
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "170px",
    slidesToShow: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          infinite: true,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  const change = useRef(null);
  return (
    <div className="testimonial-container">
      <div className="testimonial-logo">
        <Logo logo={FaqIcon} bgColor="#F46036" />
      </div>
      <h2
        onClick={() => {
          change.current.slickNext();
        }}>
        Testimonial
      </h2>
      <p>Don't just take our word for it - see what actual users of our service have to say about their experience.</p>
      <div className="testimonial-body">
        <Slider ref={change} {...settings}>
          {testimonies?.map((item, index) => {
            return (
              <div className="testimonial-single" key={index}>
                <div className="testimonial-wrapper">
                  <div className="testimonial-img">
                    <img src={Testifier} alt="testifier" />
                  </div>
                  <div className="testimonial-text">
                    <div className="testimonial-single-text">
                      <div className="testimonial-details">
                        <div>
                          <h2>{item.name}</h2>
                          <p>{item.position}</p>
                        </div>
                        <img src={TestifierLogo} alt="test" />
                      </div>
                      <h2>{item.testimonies}</h2>
                      <div className="star-group">
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
