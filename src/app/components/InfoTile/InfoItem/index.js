import React from "react";
import { Flex, Box, Image } from "app/components/common/ui";
import { Title, Info } from "./styled";
import { colors } from "app/styles/theme/colors";

export const InfoItem = (props) => (
  <Box m="5px 0" {...props}>
    <Title>{props.label}</Title>
    <Info>{props.info}</Info>
    {props.patch && (
      <Flex
        justifyContent="center"
        alignItems="center"
        background={colors.gray.dark}
        borderRadius="10px"
        maxWidth={{ _: "110px", lg: "140px" }}
        p="10px"
        mb="10px"
      >
        <Image
          maxWidth="80%"
          maxHeight={{ _: "110px", lg: "160px" }}
          margin="0"
          src={props.patch}
          alt="Mission patch"
        />
      </Flex>
    )}
  </Box>
);
