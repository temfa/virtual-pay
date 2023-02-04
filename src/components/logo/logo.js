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

    @media screen and (max-width: 500px) {
      width: 48px;
      height: 48px;

      img {
        width: 16px;
      }
    }
  `;

  return (
    <LogoStyled>
      <img src={logo} alt="logo" />
    </LogoStyled>
  );
};

export default Logo;
