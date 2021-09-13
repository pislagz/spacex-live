import React from "react";
import { Hamburger, Wrapper, Img } from "./styled";
import hamburger from "assets/hamburger.svg";
import { Logo } from "assets/Logo";

export const Header = () => (
  <Wrapper as="header">
    <Logo fill={"white"} width={"201"} height={"50"} />
    <Hamburger>
      <Img src={hamburger} alt="" />
    </Hamburger>
  </Wrapper>
);
