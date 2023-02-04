import React from "react";
import styled from "styled-components";
import Arrow from "../../assets/arrow-right.svg";

const Button = ({ text, bgColor, action }) => {
  const StyledButton = styled.button`
    // width: 100%;
    background-color: ${bgColor};
    border-radius: 100px;
    color: white;
    border: none;
    padding: 16px 24px;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    font-family: Work Sans, sans-serif;
    cursor: pointer;


    .span-content{
    display: flex;
    justify-content: center;
    align-items: center;

    }

   .button-arrow{
    width: 18px
    background-color: green;
    margin-left: 4px;
   }

    .button-arrow img{
        width: 18px;
    }

    @media screen and (max-width: 500px){
        font-size: 12px;
        line-height: 14px;

        .button-arrow img{
        width: 10px;
    }
    }
  `;

  return (
    <StyledButton className="button" onClick={action}>
      <span className="span-content">
        {text}
        <span className="button-arrow">
          <img src={Arrow} alt="arrow" />
        </span>
      </span>
    </StyledButton>
  );
};

export default Button;
