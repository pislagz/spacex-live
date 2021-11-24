import styled from "styled-components";
import { gradients } from "app/styles/theme/colors";
import { Flex } from "app/components/common/ui";

export const More = styled(Flex).attrs({
  as: "button",
  p: "sm",
  borderRadius: "md",
  fontSize: "md",
})`
  border: none;
  background: ${gradients.tile};
  color: white;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.1s ease-out;

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`;
