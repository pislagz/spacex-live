import React from "react";
import { Flex } from "app/components/common/ui";
import { colors } from "app/styles/theme/colors";
import { Label } from "app/components/common/Label";

export const IconButton = ({ icon, label }) => (
  <Flex as="li" flexDirection="column" alignItems="center" m="5px">
    <Flex
      as="button"
      border="none"
      borderRadius={{ _: "sm" }}
      background={colors.gray.dark}
      width="60px"
      height="40px"
      alignItems="center"
      justifyContent="center"
    >
      {icon}
    </Flex>
    <Label fontSize={{ _: "xxs", sm: "xs" }}>{label}</Label>
  </Flex>
);
