import React from "react";
import { Hamburger, Wrapper } from "./styled";
import { HamburgerIcon } from "assets/HamburgerIcon.js";
import { Logo } from "assets/Logo";

export const Header = ({ setMobileMenuVisibility }) => (
  <Wrapper onClick={() => setMobileMenuVisibility(true)}>
    <Logo fill={"white"} width={"201"} height={"50"} />
    <Hamburger>
      <HamburgerIcon />
    </Hamburger>
  </Wrapper>
);
