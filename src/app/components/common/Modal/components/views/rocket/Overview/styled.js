import styled from "styled-components";
import { Flex } from "app/components/common/ui";
import { shadows } from "app/styles/theme/shadows";

export const Specs = styled(Flex)`
  box-shadow: ${shadows.medium};
`;

export const Col = styled(Flex)``;
Col.defaultProps = {
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-around",
};
