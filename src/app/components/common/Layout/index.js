import React from "react";
import { OuterWrapper, InnerWrapper } from "./styled";

export const Layout = ({ children }) => (
  <OuterWrapper>
    <InnerWrapper>{children}</InnerWrapper>
  </OuterWrapper>
);
