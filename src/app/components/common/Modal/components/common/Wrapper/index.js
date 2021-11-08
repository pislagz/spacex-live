import React from "react";
import { Flex } from "app/components/common/ui";

export const Wrapper = ({ children }) => (
  <Flex flexDirection={{ _: "column", lg: "row" }}>{children}</Flex>
);
