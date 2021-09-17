import React from "react";
import {
  Wrapper,
  List,
  ListElement,
  NavLink,
  CloseWrapper,
  Overlay,
} from "./styled";
import { Logo } from "assets/Logo";
import { Close } from "assets/Close";
import { ROUTES } from "app/constants/routes";
import { useWindowSize } from "app/hooks/useWindowSize";
import { getSanitizedBreakpoint } from "app/styles/theme/breakpoints";
import { AnimatePresence, motion } from "framer-motion";

const animations = {
  overlay: {
    transition: { duration: 0.5, ease: "easeOut" },
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  sidebar: {
    transition: { duration: 0.5, ease: "easeOut" },
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
  },
};

export const Sidebar = ({
  isMobileMenuVisible,
  setMobileMenuVisibility,
  isVisible,
}) => {
  const size = useWindowSize();

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {size.width < getSanitizedBreakpoint("lg") && (
            <Overlay as={motion.div} {...animations.overlay} />
          )}
          <Wrapper
            as={size.width > getSanitizedBreakpoint("lg") ? "div" : motion.div}
            {...animations.sidebar}
            p={{ _: "4rem 1rem 0 2rem" }}
            minWidth={{ _: "14rem" }}
            maxWidth={{ lg: "17rem" }}
            right={{ _: "0", lg: "unset" }}
            left={{ _: "unset", lg: "0" }}>
            {size.width >= getSanitizedBreakpoint("lg") ? null : (
              <CloseWrapper onClick={() => setMobileMenuVisibility(false)}>
                <Close />
              </CloseWrapper>
            )}
            <Logo fill={"black"} />

            <nav>
              <List fontSize="lg">
                {ROUTES.map((route) => (
                  <ListElement key={route.name}>
                    <NavLink to={`${route.route}`}>{route.name}</NavLink>
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
