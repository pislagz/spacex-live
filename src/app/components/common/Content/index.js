import React from "react";
import styled from "styled-components";
import { Flex } from "app/components/common/ui";
import { mediaQuery } from "app/styles/theme/breakpoints";
import { useSelector } from "react-redux";
import { selectRoute } from "app/redux/selectors";

export const Content = ({ children }) => {
  const currentRoute = useSelector(selectRoute).route;

  return (
    <Flex
      width="100%"
      height={{ md: "90%", lg: "100%;" }}
      // minHeight={{ _: "90%", md: "unset" }}
      pl={{ _: "0", lg: "bigSidebar" }}
      justifyContent="center"
    >
      <Main
        showScrollbar={
          currentRoute === "Dashboard" || currentRoute === "Launches"
            ? true
            : false
        }
      >
        {children}
      </Main>
    </Flex>
  );
};

const Main = styled(Flex).attrs({ as: "main" })`
  width: 100%;
  padding-top: 0;
  flex-wrap: wrap;
  flex-direction: column;

  overflow-y: auto;

  //force scroll in app view to prevent content bounce on scrollbar appear
  ${mediaQuery.xl} {
    overflow-y: ${({ showScrollbar }) => (showScrollbar ? "scroll" : "auto")};
  }

  ${mediaQuery.md} {
    justify-content: center;
    flex-direction: row;
    align-content: flex-start;
  }

  //Center launches list
  align-content: center;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #353535;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #fff;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #828282;
  }

  /* Handle on active */
  ::-webkit-scrollbar-thumb:active {
    background: #707070;
  }
`;
