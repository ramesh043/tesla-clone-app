import React, { useState } from "react";
import styled from "styled-components";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [burgerStatus, setburgerStatus] = useState(false);
  return (
    <Container>
      <a href="Homehome">
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <Menu>
        <p>
          <a href="home">Model S</a>
        </p>
        <p>
          <a href="home">Model X</a>
        </p>
        <p>
          <a href="home">Model Y</a>
        </p>
        <p>
          <a href="home">Model 3</a>
        </p>
      </Menu>
      <RightMenu>
        <a href="shop">Shop</a>
        <a href="tesla-account">Tesla Account</a>
        <CustoMenu onClick={() => setburgerStatus(true)} />
      </RightMenu>
      <BurgerMenu show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setburgerStatus(false)} />
        </CloseWrapper>
        <li>
          <a href="Home">Online order</a>
        </li>
        <li>
          <a href="Home">Online order</a>
        </li>
        <li>
          <a href="Home">Online order</a>
        </li>
        <li>
          <a href="Home">Online order</a>
        </li>
        <li>
          <a href="Home">Online order</a>
        </li>
        <li>
          <a href="Home">Online order</a>
        </li>
        <li>
          <a href="Home">Online order</a>
        </li>
        <li>
          <a href="Home">Online order</a>
        </li>
        <li>
          <a href="Home">Online order</a>
        </li>
        <li>
          <a href="Home">Online order</a>
        </li>
        <li>
          <a href="Home">Online order</a>
        </li>
      </BurgerMenu>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  min-height: 50px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0px 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    /* flex-wrap: nowrap; */
  }
`;
const CustoMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 30px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s ease-in;
  li {
    padding: 15px 0px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 500;
  }
`;
const CustomClose = styled(CloseIcon)``;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
