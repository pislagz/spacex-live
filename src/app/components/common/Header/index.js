import React from "react";
import { Box } from "app/components/common/ui";
import { Hamburger, Wrapper } from "./styled";
import { HamburgerIcon } from "assets/icons/functional/HamburgerIcon";
import { Logo } from "assets/icons/logo/Logo";
import { useWindowSize } from "app/hooks/useWindowSize";
import { largeWidth } from "app/styles/theme/breakpoints";

export const Header = ({ setIsMobileMenuVisible }) => {
  const size = useWindowSize();

  return size.width >= largeWidth ? null : (
    <Wrapper>
      <Box as="a" href="/">
        <Logo fill={"white"} width={"201"} height={"50"} />
      </Box>
      <Hamburger onClick={() => setIsMobileMenuVisible(true)}>
        <HamburgerIcon />
      </Hamburger>
    </Wrapper>
  );
};
