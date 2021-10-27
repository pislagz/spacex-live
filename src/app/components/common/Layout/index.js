import React from "react";
import { OuterWrapper, InnerWrapper } from "./styled";

export const Layout = ({ children, isMobileMenuVisible }) => (
  //block scrolling on mobile menu open
  <OuterWrapper isMobileMenuVisible={isMobileMenuVisible}>
    <InnerWrapper>{children}</InnerWrapper>
  </OuterWrapper>
);
