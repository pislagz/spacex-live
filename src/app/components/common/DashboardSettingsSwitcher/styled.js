import styled from "styled-components";
import { Flex } from "app/components/common/ui";
import { colors } from "app/styles/theme/colors";

const S = {
  Switch: styled(Flex).attrs({
    borderRadius: "sm",
    overflow: "hidden",
  })`
    margin-bottom: 1rem;
    margin-top: 0.25rem;
    cursor: pointer;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  `,
  Item: styled(Flex).attrs({
    justifyContent: "center",
    flexBasis: "50%",
    padding: "xxs",
  })`
    background: ${({ isActive }) =>
      isActive ? colors.blue.sky : colors.gray.medium};
    color: ${({ isActive }) => (isActive ? colors.white : colors.black.dark)};

    &:hover {
      background: ${({ isActive }) =>
        isActive ? colors.blue.sky : colors.blue.light};
      color: ${colors.white};
    }

    &:active {
      background: ${colors.blue.sky};
      color: ${colors.white};
    }
  `,
};

export default S;
