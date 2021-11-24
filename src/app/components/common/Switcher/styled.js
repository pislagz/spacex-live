import styled from "styled-components";
import { Flex } from "app/components/common/ui";
import { colors } from "app/styles/theme/colors";
import { shadows } from "app/styles/theme/shadows";

export const Switch = styled(Flex).attrs({ flexWrap: "wrap" })`
  margin-bottom: 1rem;
  margin-top: 0.25rem;
  width: 100%;
`;
export const Item = styled(Flex).attrs({
  as: "button",
  justifyContent: "center",
  borderRadius: "sm",
  overflow: "hidden",
  fontSize: { _: "xxs", sm: "sm" },
})`
  transition: all 0.1s ease-out;
  flex: auto;
  margin: 3px;
  padding: 5px 0;
  border: none;
  cursor: ${({ itemsCount }) => (itemsCount > 1 ? "pointer" : "unset")};
  background: ${({ isActive }) =>
    isActive ? colors.black.dark : colors.white};
  color: ${({ isActive }) => (isActive ? colors.white : colors.black.dark)};
  box-shadow: ${shadows.small};

  &:hover {
    background: ${({ isActive }) =>
      isActive ? colors.black.dark : colors.black.medium};
    color: ${colors.white};
  }

  &:active {
    background: ${colors.black.dark};
    color: ${colors.white};
  }
`;
