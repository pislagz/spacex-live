import React from "react";
import styled from "styled-components";
import { Flex } from "app/components/common/ui";
import { space } from "app/styles/theme/sizings";
import { mediaQuery } from "app/styles/theme/breakpoints";

const Main = styled(Flex).attrs({ as: "main" })`
  width: 100%;
  /* padding: ${space.sm}; */
  padding-top: 0;
  flex-wrap: wrap;
  flex-direction: column;

  ${mediaQuery.md} {
    justify-content: center;
    flex-direction: row;
  }

  ${mediaQuery.lg} {
    align-items: center;
  }
`;

export const Content = ({ children }) => (
  <Flex
    width="100%"
    height={{ md: "100%;" }}
    pl={{ _: "0", lg: "bigSidebar" }}
    justifyContent="center"
  >
    <Main>{children}</Main>
  </Flex>
);
