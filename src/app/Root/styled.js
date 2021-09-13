import styled from "styled-components";
import { Flex } from "app/components/common/ui";

export const Wrapper = styled(Flex)`
  height: 100%;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
`;

export const Background = styled.div`
  background-image: url("https://i.imgur.com/asp5L08.png");
  background-position: 53% 5%;
  min-height: 100vh;
  min-width: 100vw;
  z-index: -1;
  position: absolute;
  content: "";
`;
