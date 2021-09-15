import React from "react";
import { Hamburger, Wrapper } from "./styled";
import { HamburgerIcon } from "assets/HamburgerIcon.js";
import { Logo } from "assets/Logo";
import { useWindowSize } from "app/hooks/useWindowSize";
import { getSanitizedBreakpoint } from "app/styles/theme/breakpoints";

export const Header = ({ setMobileMenuVisibility }) => {
  const size = useWindowSize();

  return size.width >= getSanitizedBreakpoint("lg") ? null : (
    <Wrapper onClick={() => setMobileMenuVisibility(true)}>
      <Logo fill={"white"} width={"201"} height={"50"} />
      <Hamburger>
        <HamburgerIcon />
      </Hamburger>
    </Wrapper>
  );
};
