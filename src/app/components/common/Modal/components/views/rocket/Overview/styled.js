import styled from "styled-components";
import { Flex } from "app/components/common/ui";
import { shadows } from "app/styles/theme/shadows";
// import { radii } from "app/styles/theme/sizings";

export const Specs = styled(Flex)`
  box-shadow: ${shadows.medium};
`;
