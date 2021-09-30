import React from "react";
import { Box, Flex } from "app/components/common/ui";
import { sizings } from "app/styles/theme/sizings";
import { colors } from "app/styles/theme/colors";
import { fontSizes, fontWeights } from "app/styles/theme/texts";

export const IconButton = ({ icon, label }) => (
  <Flex flexDirection="column" alignItems="center" mr="10px">
    <Flex
      as="button"
      border="none"
      borderRadius={sizings.radii.sm}
      background={colors.gray.dark}
      width="60px"
      height="40px"
      alignItems="center"
      justifyContent="center"
    >
      {icon}
    </Flex>
    <Box
      as="p"
      m="0"
      mt="2px"
      p="0"
      fontWeight={fontWeights.normal}
      fontSize={fontSizes.xxxs}
      color="rgba(255,255,255,0.5)"
      style={{ textTransform: "uppercase" }}
    >
      {label}
    </Box>
  </Flex>
);
