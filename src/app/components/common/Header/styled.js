import styled from "styled-components";
import { Flex, Image } from "app/components/common/ui";

export const Hamburger = styled.button`
  //reset
  display: flex;
  border: none;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1;
  background: transparent;
  -webkit-appearance: none;

  //styles
  cursor: pointer;
  padding: 1rem;
`;

export const Wrapper = styled(Flex)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  padding-bottom: 3rem;
  padding-right: 1rem;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const Img = styled(Image)``;
