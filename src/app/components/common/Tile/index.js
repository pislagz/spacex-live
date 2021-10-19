import React from "react";
import { Flex } from "app/components/common/ui";
import { Wrapper, Title } from "./styled";

export const Tile = ({ children, title }) => (
  <Wrapper
    m={{ _: "0.5rem", md: "0.6rem" }}
    p={{ _: "1.5rem", md: "1.75rem" }}
    width={{ _: "300px", sm: "352px", xl: "420px" }}
    minHeight="333px"
  >
    <Flex flexDirection="column" width="100%">
      <Title>{title}</Title>
      {children}
    </Flex>
  </Wrapper>
);
