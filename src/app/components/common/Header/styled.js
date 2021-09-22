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

const Sidebar = styled(Flex).attrs({ as: "header" })`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* position: fixed; */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
`;

export const Wrapper = ({ children }) => (
  <Flex width="100%" alignItems="center">
    <Sidebar p="2rem 1rem 3rem 2rem">{children}</Sidebar>
  </Flex>
);

export const Img = styled(Image)``;
