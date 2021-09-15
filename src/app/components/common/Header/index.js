import React from "react";
import { Hamburger, Wrapper, Img } from "./styled";
import hamburger from "assets/hamburger.svg";
import { Logo } from "assets/Logo";
import { useWindowSize } from "app/hooks/useWindowSize";
import { getSanitizedBreakpoint } from "app/styles/theme/breakpoints";

export const Header = () => {
  const size = useWindowSize();

  return size.width >= getSanitizedBreakpoint("lg") ? null : (
    <Wrapper>
      <Logo fill={"white"} width={"201"} height={"50"} />
      <Hamburger>
        <Img src={hamburger} alt="" />
      </Hamburger>
    </Wrapper>
  );
};
