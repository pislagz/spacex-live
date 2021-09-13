// import { Box, Image, Flex } from "./";
import { Flex } from "./";
import styled from "styled-components";
import { gradients } from "app/styles/theme/colors";
import { fonts } from "app/styles/theme/texts";
import { motion } from "framer-motion";
import { letterSpacings } from "../../../styles/theme/texts";
import { shadows } from "app/styles/theme/shadows";

const StyledButton = styled(Flex)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.button};
  background: ${gradients.primary};
  border: none;
  cursor: pointer;
  letter-spacing: ${letterSpacings.button};
  box-shadow: ${shadows.button};
`;

StyledButton.defaultProps = {
  boxShadow: "button",
  letterSpacings: "sm",
};

export const Button = ({ children, ...props }) => {
  return (
    <StyledButton
      p={{ _: "0.5rem 2rem" }}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.5,
          ease: "backOut",
        },
      }}
      as={motion.button}
      borderRadius="full"
      height="40px"
      color={"white"}
      {...props}>
      {children}
    </StyledButton>
  );
};
