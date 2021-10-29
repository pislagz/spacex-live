import React from "react";
import { useSelector } from "react-redux";
import { selectModal } from "app/redux/selectors";
import { OuterWrapper, InnerWrapper } from "./styled";

export const Layout = ({ children, isMobileMenuVisible }) => {
  const modal = useSelector(selectModal);

  return (
    <OuterWrapper isMobileMenuVisible={isMobileMenuVisible || modal.isOpen}>
      <InnerWrapper>{children}</InnerWrapper>
    </OuterWrapper>
  );
};
