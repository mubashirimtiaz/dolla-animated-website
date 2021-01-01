import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./Navbar.styles";

const Navbar = ({ toggleIsOpen }) => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">dolla</NavLogo>
        <MobileIcon>
          <FaBars onClick={toggleIsOpen} />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink to="about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="discover">Discover</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="services">Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="signup">Sign Up</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="about">About</NavLink>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="signin">Sign In</NavBtnLink>
        </NavBtn>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
