import React from "react";
import {
  TopBarContainer,
  Icon,
  CloseIcon,
  TopBarWrapper,
  TopBarMenu,
  TopBarLink,
  TopBarBtn,
  TopBarBtnLink,
} from "./Topbar.styles";
const Topbar = ({ isOpen, toggleIsOpen }) => {
  return (
    <TopBarContainer isOpen={isOpen}>
      <Icon onClick={toggleIsOpen}>
        <CloseIcon></CloseIcon>
      </Icon>
      <TopBarWrapper>
        <TopBarMenu>
          <TopBarLink to="about" onClick={toggleIsOpen}>
            About
          </TopBarLink>
          <TopBarLink to="discover" onClick={toggleIsOpen}>
            Discover
          </TopBarLink>
          <TopBarLink to="services" onClick={toggleIsOpen}>
            Services
          </TopBarLink>
          <TopBarLink to="signup" onClick={toggleIsOpen}>
            Sign Up
          </TopBarLink>
          <TopBarBtn>
            <TopBarBtnLink to="signin"> Sign In</TopBarBtnLink>
          </TopBarBtn>
        </TopBarMenu>
      </TopBarWrapper>
    </TopBarContainer>
  );
};

export default Topbar;
