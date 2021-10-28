import styled from "styled-components";
import { Flex, Box } from "app/components/common/ui";
import { fontWeights } from "app/styles/theme/texts";
import { colors } from "app/styles/theme/colors";
import { radii } from "app/styles/theme/sizings";

export const S = {
  Wrapper: styled(Flex).attrs({ flexDirection: "column", width: "100%" })``,
};

export const Nav = {
  Wrapper: styled(Flex).attrs({ as: "ul", m: "0", p: "0" })`
    list-style: none;
  `,
  Route: styled(Box).attrs({
    as: "li",
    m: "0",
    marginTop: "-0.25rem",
    p: "0.25rem 0.8rem",
  })`
    font-weight: ${({ isActive }) =>
      isActive ? fontWeights.bold : fontWeights.light};
    color: ${({ isActive }) =>
      isActive ? colors.black.dark : colors.black.medium};
    cursor: pointer;
    border-radius: ${radii.md};
    &:hover {
      background: ${colors.gray.light};
    }
  `,
};
