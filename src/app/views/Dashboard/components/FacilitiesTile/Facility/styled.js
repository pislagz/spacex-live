import styled from "styled-components";
import { Flex, Box, Image } from "app/components/common/ui";
import { zIndicies } from "app/styles/theme/zIndicies";
import { radii } from "app/styles/theme/sizings";

const Wrap = styled(Flex)`
  /* Webkit border radius with overflow hidden fix*/
  transform: translateZ(0);

  flex-direction: column;
  position: relative;
  margin-top: 1rem;
  border-radius: ${radii.md};
  overflow: hidden;
  /* height: 120px; */

  &:after {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    content: "";
    z-index: ${zIndicies.facilityGradient};
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

const Picture = styled(Image)`
  position: absolute;
  width: 100%;
  object-fit: cover;
  object-position: bottom;
  z-index: ${zIndicies.facilityBackground};
`;

export const Row = styled(Flex)``;
export const Col = styled(Flex)``;
export const Padder = styled(Box)``;

export const Wrapper = ({ children, image }) => (
  <Wrap position="relative">
    <Box zIndex={zIndicies.content}>{children}</Box>
    <Picture src={image} />
  </Wrap>
);
