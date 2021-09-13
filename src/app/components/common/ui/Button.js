// import { Box, Image, Flex } from "./";
import { Flex } from "./";
import styled from "styled-components";
import { gradients } from "app/styles/theme/colors";
import { fonts } from "app/styles/theme/texts";
import { motion } from "framer-motion";

const StyledButton = styled(Flex)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.button};
  background: ${gradients.primary};
  border: none;
  cursor: pointer;
`;

export const Button = ({ children, ...props }) => {
  return (
    <StyledButton
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.5,
          ease: "backOut",
        },
      }}
      boxShadow="button"
      letterSpacing="button"
      p={{ _: "0.5rem 2rem" }}
      as={motion.button}
      borderRadius="full"
      height="40px"
      color={"white"}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
