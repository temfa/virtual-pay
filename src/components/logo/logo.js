import React from "react";
import styled from "styled-components";

const Logo = ({ logo, bgColor }) => {
  const LogoStyled = styled.div`
    width: 88px;
    height: 88px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${bgColor};
    border-radius: 100px;
  `;

  return (
    <LogoStyled>
      <img src={logo} alt="logo" />
    </LogoStyled>
  );
};

export default Logo;
