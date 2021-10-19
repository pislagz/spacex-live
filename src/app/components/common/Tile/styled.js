import styled from "styled-components";
import { Flex, Box } from "app/components/common/ui";
import { zIndicies } from "app/styles/theme/zIndicies";
import { colors } from "app/styles/theme/colors";
import { sizings } from "app/styles/theme/sizings";

export const Title = styled(Box).attrs({ as: "h3" })``;
Title.defaultProps = {
  m: "0",
  marginBottom: "0.5rem",
  p: "0",
};

export const Wrapper = styled(Flex).attrs({ as: "article" })`
  color: ${colors.white};
  border-radius: ${sizings.radii.lg};
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: ${zIndicies.content};

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
