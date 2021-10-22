import React from "react";
import { Flex } from "app/components/common/ui";
import { Wrapper, Title } from "./styled";

export const Tile = ({ children, title, ...props }) => (
  <Wrapper {...props}>
    <Flex flexDirection="column" width="100%">
      <Title>{title}</Title>
      {children}
    </Flex>
  </Wrapper>
);
