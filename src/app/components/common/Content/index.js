import React from "react";
import { Flex } from "app/components/common/ui";

export const Content = ({ children }) => (
  <Flex
    width="100%"
    height={{ md: "100%;" }}
    pl={{ _: "0", lg: "bigSidebar" }}
    justifyContent="center"
  >
    <Flex
      as="main"
      width="100%"
      p={{ _: "sm", lg: "lg", max: "8rem 2rem" }}
      pt={{ _: "0", lg: "lg" }}
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Flex>
  </Flex>
);
