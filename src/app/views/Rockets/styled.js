import styled from "styled-components";
import { Flex } from "app/components/common/ui";
import { zIndicies } from "app/styles/theme/zIndicies";
import { colors } from "app/styles/theme/colors";
import { sizings } from "app/styles/theme/sizings";

export const Wrapper = styled(Flex).attrs({ as: "article" })`
  color: ${colors.white};
  border-radius: ${sizings.radii.lg};
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: ${zIndicies.content};
  padding: 2rem;

  //blur mask
  &:before {
    border-radius: ${sizings.radii.lg};
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    z-index: ${zIndicies.infoTileBlur};
  }
`;

export const Button = styled(Flex).attrs({ as: "button" })`
  cursor: pointer;
  margin-left: auto;
  font-weight: 600;
`;
Button.defaultProps = {
  fontSize: "md",
  margin: "0",
  padding: "0",
  background: "none",
  color: colors.white,
  border: "none",
};

export const IconWrapper = styled(Flex)`
  justify-content: center;
  margin-left: 5px;

  svg {
    transform: ${({ isLeft }) => (isLeft ? "rotate(180deg)" : "rotate(0deg)")};
    transition: transform 0.5s;
  }
`;
