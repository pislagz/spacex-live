import React from "react";
import { Flex } from "app/components/common/ui";
import { Wrapper, Title } from "./styled";

export const Tile = ({ children, title }) => (
  <Wrapper
    m={{ _: "0.5rem", md: "1rem" }}
    p={{ _: "1.5rem", md: "2rem" }}
    width={{ _: "300px", sm: "352px" }}
  >
    <Flex flexDirection="column" width="100%">
      <Title>{title}</Title>
      {children}
    </Flex>
  </Wrapper>
);
