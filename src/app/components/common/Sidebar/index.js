import React from "react";
import S from "./styled";
import {
  getSanitizedBreakpoint,
  largeWidth,
} from "app/styles/theme/breakpoints";
import { Logo } from "assets/icons/logo/Logo";
import { CloseIcon } from "assets/icons/functional/CloseIcon";
import { ROUTES } from "app/constants/routes";
import { useWindowSize } from "app/hooks/useWindowSize";
import { AnimatePresence, motion } from "framer-motion";
import { Dropdown } from "app/components/common/Dropdown";
import { Flex } from "app/components/common/ui";
import { DashboardSettingsSwitcher } from "app/components/common/settingsSwitchers/Dashboard";
import { selectCurrentRoute } from "app/redux/selectors";
import { setCurrentRoute } from "app/redux/reducers/currentRouteReducer";
import { useDispatch, useSelector } from "react-redux";

export const Sidebar = ({ isMobileMenuVisible, setIsMobileMenuVisible }) => {
  const size = useWindowSize();
  const isWideScreen = size.width >= largeWidth;
  const isVisible = isWideScreen || isMobileMenuVisible;

  const currentRoute = useSelector(selectCurrentRoute);
  const dispatch = useDispatch();
  const handleRouteChange = (clickedRoute) => {
    dispatch(setCurrentRoute(clickedRoute));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {size.width < getSanitizedBreakpoint("lg") && (
            <S.Overlay
              as={motion.div}
              onClick={() => setIsMobileMenuVisible(false)}
              {...S.animations.overlay}
            />
          )}
          <S.Wrapper
            as={size.width >= getSanitizedBreakpoint("lg") ? "div" : motion.div}
            {...S.animations.sidebar}
            p={{ _: "4rem 2rem 0 2rem" }}
            minWidth={{ _: "14rem" }}
            maxWidth={{ lg: "bigSidebar" }}
            right={{ _: "0", lg: "unset" }}
            left={{ _: "unset", lg: "0" }}
            position="relative"
          >
            <Flex flexDirection="column" height="100%">
              {size.width >= getSanitizedBreakpoint("lg") ? null : (
                <S.CloseWrapper>
                  <S.CloseButton onClick={() => setIsMobileMenuVisible(false)}>
                    <CloseIcon />
                  </S.CloseButton>
                </S.CloseWrapper>
              )}
              <Logo fill={"black"} />

              <nav>
                <S.List fontSize="lg">
                  {ROUTES.map(({ route, name }) => (
                    <S.ListElement key={name}>
                      <S.NavLink
                        to={`${route}`}
                        onClick={() => {
                          setIsMobileMenuVisible(false);
                          handleRouteChange(name);
                        }}
                        selected={currentRoute.selected === name}
                      >
                        {name}
                      </S.NavLink>
                    </S.ListElement>
                  ))}
                </S.List>
              </nav>
              <Dropdown
                marginTop="auto"
                marginBottom="md"
                more="settings"
                less="hide"
                isBlack
                revertArrow
              >
                <DashboardSettingsSwitcher />
              </Dropdown>
              <S.Footer marginBottom="md" />
            </Flex>
          </S.Wrapper>
        </>
      )}
    </AnimatePresence>
  );
};
