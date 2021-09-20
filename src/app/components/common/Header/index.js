import React from "react";
import { Hamburger, Wrapper } from "./styled";
import { HamburgerIcon } from "assets/HamburgerIcon.js";
import { Logo } from "assets/Logo";
import { useWindowSize } from "app/hooks/useWindowSize";
import { largeWidth } from "app/styles/theme/breakpoints";

export const Header = ({ setMobileMenuVisibility }) => {
  const size = useWindowSize();

  return size.width >= largeWidth ? null : (
    <Wrapper>
      <Logo fill={"white"} width={"201"} height={"50"} />
      <Hamburger onClick={() => setMobileMenuVisibility(true)}>
        <HamburgerIcon />
      </Hamburger>
    </Wrapper>
  );
};
