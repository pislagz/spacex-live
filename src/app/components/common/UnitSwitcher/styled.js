import styled from "styled-components";
import { Flex } from "app/components/common/ui";
import { colors } from "app/styles/theme/colors";

export const S = {
  Switch: styled(Flex).attrs({
    bg: "gray.medium",
    borderRadius: "sm",
    overflow: "hidden",
  })`
    cursor: pointer;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  `,
  Item: styled(Flex).attrs({
    justifyContent: "center",
    flexBasis: "50%",
    padding: "xxs",
  })`
    &:hover {
      background: ${colors.blue.sky};
      color: ${colors.white};
    }
  `,
};
