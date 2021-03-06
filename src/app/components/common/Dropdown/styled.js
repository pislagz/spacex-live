import styled from "styled-components";
import { Flex, Box } from "app/components/common/ui";
import { fontSizes, fontWeights } from "app/styles/theme/texts";

export const Wrapper = styled(Flex)``;
Wrapper.defaultProps = {
  flexDirection: "column",
  marginBottom: "-5px",

  //push dropdown to the bottom & avoid floating during opening/collapse
  marginTop: "auto",
};

export const Content = styled(Flex)``;
Content.defaultProps = {
  flexDirection: "column",
};

export const Text = styled(Box).attrs({ as: "p" })``;
Text.defaultProps = {
  margin: "0",
  marginLeft: "5px",
};

export const Activator = styled(Flex).attrs({ as: "button" })`
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #fff;
  font-family: "HelveticaNeue";
  font-size: ${fontSizes.md};
  font-weight: ${fontWeights.bold};
  align-items: center;
`;
Activator.defaultProps = {
  // margin: "0",
};

export const IconWrapper = styled(Flex)`
  justify-content: center;

  svg {
    transform: ${({ isDown }) => (isDown ? "rotate(90deg)" : "rotate(-90deg)")};
    transition: transform 0.5s;
  }
`;
