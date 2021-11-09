import React from "react";
import { Flex, Box } from "app/components/common/ui";
import { mediaQuery } from "app/styles/theme/breakpoints";
import styled from "styled-components";

export const Wrapper = ({ children, ...props }) => (
  <Flex flexDirection={{ _: "column", lg: "row" }} {...props}>
    {children}
  </Flex>
);

export const MobileFiller = styled(Box)`
  height: ${({ height = "40px" }) => height};
  ${mediaQuery.lg} {
    display: none;
  }
`;
