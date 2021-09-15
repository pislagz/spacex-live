import { Box, Image } from ".";
import { zIndicies } from "app/styles/theme/zIndicies";
import styled from "styled-components";

export const StyledBackground = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  content: "";
  z-index: ${zIndicies.background};

  img {
    object-fit: cover;
  }

  &:after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    content: "";
    z-index: ${zIndicies.backgroundGradient};
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

const Background = () => (
  <StyledBackground>
    <Image
      width="100%"
      height="100%"
      position="absolute"
      src="https://camo.githubusercontent.com/2a2dfb8b139de852f33a0a268fad5a1bf5ed32b459f3193fe296a26eb9a54e4d/68747470733a2f2f6c6976652e737461746963666c69636b722e636f6d2f36353533352f34393138353134393132325f333766356335326534335f6b2e6a7067"
    />
  </StyledBackground>
);

export const Content = ({ children }) => {
  return (
    <Box as="main" height="100%" width="100%">
      <Background />
      {children}
    </Box>
  );
};
