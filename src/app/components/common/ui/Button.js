import styled from "styled-components";
import { Flex } from "./";
import { motion } from "framer-motion";

const StyledButton = styled(Flex)`
  //reset
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1;
  background: transparent;
  -webkit-appearance: none;
`;

StyledButton.defaultProps = {
  letterSpacings: "sm",
};

export const Button = ({ children, ...props }) => {
  return (
    <StyledButton
      p="1rem"
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
      {...props}
    >
      {children}
    </StyledButton>
  );
};
