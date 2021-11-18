import styled from "styled-components";
import { Flex } from "app/components/common/ui";
import { colors } from "app/styles/theme/colors";

export const Switch = styled(Flex)`
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
  margin: 0 0.5px;
  padding: 5px 0;
  width: 120px;
  border: 1px solid ${colors.black.dark};
  cursor: ${({ itemsCount }) => (itemsCount > 1 ? "pointer" : "unset")};
  background: ${({ isActive }) =>
    isActive ? colors.black.dark : colors.white};
  color: ${({ isActive }) => (isActive ? colors.white : colors.black.dark)};

  &:hover {
    background: ${({ isActive }) =>
      isActive ? colors.black.dark : colors.black.medium};
    color: ${colors.white};
    border-color: ${({ isActive }) =>
      isActive ? colors.black.dark : colors.black.medium};
  }

  &:active {
    background: ${colors.black.dark};
    color: ${colors.white};
  }
`;
