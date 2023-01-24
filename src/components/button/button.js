import React from "react";
import styled from "styled-components";

const Button = ({ text, bgColor, action }) => {
  const StyledButton = styled.button`
    // width: 100%;
    background-color: ${bgColor};
    border-radius: 30px;
    color: white;
    border: none;
    padding: 12px 24px;
    font-style: normal;
    font-weight: 400;
    font-size: 23.619px;
    line-height: 37px;
    font family: "Roboto", sans-serif
    cursor: pointer;
  `;
  return (
    <StyledButton className="button" onClick={action}>
      {text}
    </StyledButton>
  );
};

export default Button;
