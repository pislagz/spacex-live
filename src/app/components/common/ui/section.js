import { Box, Image } from ".";
import styled from "styled-components";
import { gradients } from "@theme/colors";

export const StyledBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  content: "";
  z-index: 0;

  img {
    object-fit: cover;
  }

  &:before {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    content: "";
    background: ${gradients.whiteBottom};
    z-index: -1;
  }
`;

const Background = ({ secondary }) => {
  return (
    <StyledBackground>
      <Image
        width="100%"
        height="100%"
        zIndex="-3"
        position="absolute"
        src={`/assets/background/bg-${secondary ? "2" : "1"}.png`}
      />
    </StyledBackground>
  );
};

export const Section = ({ children, secondaryBg }) => {
  return (
    <Box
      as="section"
      height="800px"
      width="100%"
      zIndex={3}
      position="relative"
    >
      <Background secondary={secondaryBg} />
      {children}
    </Box>
  );
};
