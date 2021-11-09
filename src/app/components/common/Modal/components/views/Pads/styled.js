import styled from "styled-components";
import { Box, Flex, Image } from "app/components/common/ui";
import { shadows } from "app/styles/theme/shadows";
import { radii } from "app/styles/theme/sizings";
import { zIndicies } from "app/styles/theme/zIndicies";

export const Wrapper = styled(Flex)`
  width: 100%;
  height: 100%;
`;
export const Card = styled(Flex).attrs({
  as: "article",
  flexDirection: "column",
  minWidth: "309px",
  width: { _: "100%", sm: "90%", md: "80%" },
  borderRadius: "lg",
})`
  padding: 2rem;
  box-shadow: ${shadows.medium};
`;
export const Col = styled(Flex)`
  flex-direction: column;
`;
export const Description = styled(Flex).attrs({ as: "article" })``;

Card.defaultProps = {
  margin: "0",
  padding: "0",
};

Description.defaultProps = {
  margin: "0",
  padding: "0",
};

const Wrap = styled(Flex)`
  transform: translateZ(0);
  position: relative;
  border-radius: ${radii.md};
  overflow: hidden;

  &:after {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    content: "";
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 48.44%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
`;
const Photo = styled(Image)`
  width: 323.6px;
  height: 200px;
  object-fit: cover;
`;
const Padder = styled(Flex)`
  height: 100%;
  width: 100%;
  align-items: flex-end;
`;

export const PhotoWrapper = ({ children, src, ...props }) => (
  <Wrap position="relative" {...props}>
    <Box position="absolute" bottom="0" zIndex={zIndicies.contentOverGradient}>
      <Padder p="0.5rem 1rem">{children}</Padder>
    </Box>
    <Flex justifyContent="center" alignItems="center">
      <Photo src={src} />
    </Flex>
  </Wrap>
);
