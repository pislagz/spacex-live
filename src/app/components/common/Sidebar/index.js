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
import { Logo } from "assets/icons/logo/Logo";
import { CloseIcon } from "assets/icons/functional/CloseIcon";
import { ROUTES } from "app/constants/routes";
import { useWindowSize } from "app/hooks/useWindowSize";
import { AnimatePresence, motion } from "framer-motion";

export const Sidebar = ({ isMobileMenuVisible, setIsMobileMenuVisible }) => {
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
              onClick={() => setIsMobileMenuVisible(false)}
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
                <CloseButton onClick={() => setIsMobileMenuVisible(false)}>
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
                      onClick={() => setIsMobileMenuVisible(false)}
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
