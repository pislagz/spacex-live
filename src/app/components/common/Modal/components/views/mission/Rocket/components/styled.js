import styled from "styled-components";
import { Flex, Image } from "app/components/common/ui";
import { radii } from "app/styles/theme/sizings";
import { zIndicies } from "app/styles/theme/zIndicies";
import { shadows } from "app/styles/theme/shadows";

const CardWrapper = styled(Flex)`
  flex-direction: column;
  transform: translateZ(0);
  position: relative;
  border-radius: ${radii.md};
  overflow: hidden;
  object-fit: cover;
  min-height: 430px;
  box-shadow: ${shadows.medium};

  img {
    width: 308px;
    height: 430px;
    object-fit: cover;
  }

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

export const Padder = styled(Flex)`
  height: 100%;
  width: 100%;
  align-items: flex-end;
`;

export const Card = ({ src, children }) => (
  <CardWrapper marginTop="xxs">
    <Flex
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex={zIndicies.contentOverGradient}
    >
      <Padder p="0.5rem 1rem">{children}</Padder>
    </Flex>
    <Image src={src} />
  </CardWrapper>
);
