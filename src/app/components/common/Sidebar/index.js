import React from "react";
import * as S from "./styled";
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
import { colors } from "app/styles/theme/colors";

export const Sidebar = ({ isMobileMenuVisible, setIsMobileMenuVisible }) => {
  const size = useWindowSize();
  const isWideScreen = size.width >= largeWidth;
  const isVisible = isWideScreen || isMobileMenuVisible;

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
            // p={{ _: "0 2rem 0 2rem" }}
            minWidth={{ _: "14rem" }}
            maxWidth={{ lg: "bigSidebar" }}
            right={{ _: "0", lg: "unset" }}
            left={{ _: "unset", lg: "0" }}
            position="relative"
          >
            {size.width >= getSanitizedBreakpoint("lg") ? null : (
              <S.CloseButton onClick={() => setIsMobileMenuVisible(false)}>
                <CloseIcon fill={"white"} />
              </S.CloseButton>
            )}
            <Flex
              flexDirection="column"
              height="100%"
              style={{ overflowY: "auto" }}
              p={{ _: "0 2rem 0 2rem" }}
            >
              <S.LogoWrapper as="a" href="/" marginTop="4rem">
                <Logo fill={"black"} />
              </S.LogoWrapper>

              <nav>
                <S.List fontSize="lg">
                  {ROUTES.map(({ route, name }) => (
                    <S.ListElement key={name}>
                      <S.NavLink
                        to={`${route}`}
                        onClick={() => {
                          setIsMobileMenuVisible(false);
                        }}
                        activeStyle={{
                          fontWeight: "600",
                          color: colors.black.dark,
                        }}
                        exact
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
