import React from "react";
import styled from "styled-components";
import { Flex } from "app/components/common/ui";
import { mediaQuery } from "app/styles/theme/breakpoints";

const Main = styled(Flex).attrs({ as: "main" })`
  width: 100%;
  padding-top: 0;
  flex-wrap: wrap;
  flex-direction: column;
  overflow-y: auto;

  //hide the *inner app* scrollbar
  scrollbar-color: transparent transparent;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  ::-webkit-scrollbar {
    width: 0 !important;
  }

  ${mediaQuery.md} {
    justify-content: center;
    flex-direction: row;
    align-content: flex-start;
  }

  /* ${mediaQuery.lg} {
    align-items: center;
  } */
`;

export const Content = ({ children }) => (
  <Flex
    width="100%"
    height={{ md: "90%", lg: "100%;" }}
    // minHeight={{ _: "90%", md: "unset" }}
    pl={{ _: "0", lg: "bigSidebar" }}
    justifyContent="center"
  >
    <Main>{children}</Main>
  </Flex>
);
