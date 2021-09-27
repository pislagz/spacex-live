import React from "react";
import {
  Wrapper,
  List,
  ListElement,
  NavLink,
  CloseWrapper,
  CloseButton,
  Overlay,
  animations,
} from "./styled";
import {
  getSanitizedBreakpoint,
  largeWidth,
} from "app/styles/theme/breakpoints";
import { Logo } from "assets/Logo";
import { CloseIcon } from "assets/icons/CloseIcon";
import { ROUTES } from "app/constants/routes";
import { useWindowSize } from "app/hooks/useWindowSize";
import { AnimatePresence, motion } from "framer-motion";

export const Sidebar = ({ isMobileMenuVisible, setMobileMenuVisibility }) => {
  const size = useWindowSize();
  const isWideScreen = size.width >= largeWidth;
  const isVisible = isWideScreen || isMobileMenuVisible;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {size.width < getSanitizedBreakpoint("lg") && (
            <Overlay
              as={motion.div}
              onClick={() => setMobileMenuVisibility(false)}
              {...animations.overlay}
            />
          )}
          <Wrapper
            as={size.width >= getSanitizedBreakpoint("lg") ? "div" : motion.div}
            {...animations.sidebar}
            p={{ _: "4rem 1rem 0 2rem" }}
            minWidth={{ _: "14rem" }}
            maxWidth={{ lg: "bigSidebar" }}
            right={{ _: "0", lg: "unset" }}
            left={{ _: "unset", lg: "0" }}
          >
            {size.width >= getSanitizedBreakpoint("lg") ? null : (
              <CloseWrapper>
                <CloseButton onClick={() => setMobileMenuVisibility(false)}>
                  <CloseIcon />
                </CloseButton>
              </CloseWrapper>
            )}
            <Logo fill={"black"} />

            <nav>
              <List fontSize="lg">
                {ROUTES.map((route) => (
                  <ListElement key={route.name}>
                    <NavLink
                      to={`${route.route}`}
                      onClick={() => setMobileMenuVisibility(false)}
                    >
                      {route.name}
                    </NavLink>
                  </ListElement>
                ))}
              </List>
            </nav>
          </Wrapper>
        </>
      )}
    </AnimatePresence>
  );
};
