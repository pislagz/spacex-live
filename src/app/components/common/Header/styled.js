import styled from "styled-components";
import { Flex, Image } from "app/components/common/ui";
import { Button } from "app/components/common/ui/Button";

export const Hamburger = styled(Button)`
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

export const Wrapper = styled(Flex).attrs({ as: "header" })`
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  padding-bottom: 3rem;
  padding-right: 1rem;
`;

export const Img = styled(Image)``;
