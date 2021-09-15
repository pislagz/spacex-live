import React from "react";
import { Wrapper, List, ListElement, NavLink, CloseWrapper } from "./styled";
import { Logo } from "assets/Logo";
import { Close } from "assets/Close";
import { ROUTES } from "app/constants/routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useWindowSize } from "app/hooks/useWindowSize";
import { getSanitizedBreakpoint } from "app/styles/theme/breakpoints";

export const Sidebar = () => {
  const size = useWindowSize();

  return (
    <Wrapper
      p={{ _: "4rem 1rem 0 2rem" }}
      minWidth={{ _: "14rem" }}
      maxWidth={{ lg: "17rem" }}
      right={{ _: "0", lg: "unset" }}
      left={{ _: "unset", lg: "0" }}
    >
      {size.width >= getSanitizedBreakpoint("lg") ? null : (
        <CloseWrapper>
          <Close />
        </CloseWrapper>
      )}
      <Logo fill={"black"} />
      <Router>
        <nav>
          <List fontSize="lg">
            {ROUTES.map((route) => (
              <ListElement key={route.name}>
                <NavLink to={`/${route.route}`}>{route.name}</NavLink>
              </ListElement>
            ))}
          </List>
        </nav>
      </Router>
    </Wrapper>
  );
};
