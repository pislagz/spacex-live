import React from "react";
import { Wrapper, List, ListElement, NavLink, CloseWrapper } from "./styled";
import { Logo } from "assets/Logo";
import { Close } from "assets/Close";
import { ROUTES } from "app/constants/routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useWindowSize } from "app/hooks/useWindowSize";
import { getSanitizedBreakpoint } from "app/styles/theme/breakpoints";
import { space } from "app/styles/theme/sizings";

export const Sidebar = ({ isMobileMenuVisible, setMobileMenuVisibility }) => {
  const size = useWindowSize();

  return (
    <Wrapper
      p={{ _: space.sidebar.paddings }}
      minWidth={{ _: space.sidebar.normal }}
      maxWidth={{ lg: space.sidebar.big }}
      mr={
        isMobileMenuVisible || size.width >= getSanitizedBreakpoint("lg")
          ? { _: "0" }
          : { _: `-${space.sidebar.normal}` }
      }
      right={{ _: "0", lg: "unset" }}
      left={{ _: "unset", lg: "0" }}
    >
      {size.width >= getSanitizedBreakpoint("lg") ? null : (
        <CloseWrapper onClick={() => setMobileMenuVisibility(false)}>
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

// export const handleMenuClick = () => {
//   setMenuVisibility(!isMenuVisible);
// };
