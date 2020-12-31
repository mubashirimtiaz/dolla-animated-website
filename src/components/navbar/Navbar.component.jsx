import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  FaBars,
  NavMenu,
  NavItem,
  NavLink,
} from "./Navbar.styles";

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">dolla</NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink to="about">About</NavLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
