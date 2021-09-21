import styled from "styled-components";
import { Flex, Box } from "app/components/common/ui";
import { colors } from "app/styles/theme/colors";
import { fontSizes } from "app/styles/theme/texts";

export const Wrapper = styled(Flex).attrs({ as: "article" })`
  color: ${colors.white};
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 0;

  &:before {
    border-radius: 15px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    z-index: -1;
  }
`;

export const MainTitle = styled(Box).attrs({ as: "h3" })`
  margin: 0;
  padding: 0;
  font-size: ${fontSizes.lg};
`;
