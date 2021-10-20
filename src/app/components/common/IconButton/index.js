import React from "react";
import { Flex } from "app/components/common/ui";
import { colors } from "app/styles/theme/colors";
import { Label } from "app/components/common/Label";

export const IconButton = ({ icon, label, onClick }) => {
  return (
    <Flex
      as="li"
      flexDirection="column"
      alignItems="center"
      m="10px 5px"
      width={{ _: "74px", sm: "100px", md: "98px", xl: "111px" }}
    >
      <Flex
        as="button"
        border="none"
        borderRadius={{ _: "sm" }}
        background={colors.gray.dark}
        width="60px"
        height="40px"
        alignItems="center"
        justifyContent="center"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      >
        {icon}
      </Flex>
      <Label mt="xxs" fontSize={{ _: "xxxs", md: "xxs" }}>
        {label}
      </Label>
    </Flex>
  );
};
