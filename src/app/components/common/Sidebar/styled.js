import { Box, Flex, Text } from "app/components/common/ui";
import { Button } from "app/components/common/ui/Button";
import { fontWeights } from "app/styles/theme/texts";
import styled from "styled-components";
import { zIndicies } from "app/styles/theme/zIndicies";
import { NavLink as ReactRouterNavLink } from "react-router-dom";
import { colors } from "app/styles/theme/colors";
import { mediaQuery } from "app/styles/theme/breakpoints";
import { sizings } from "app/styles/theme/sizings";

export const Wrapper = styled(Box)`
  z-index: ${zIndicies.sidebar};
  height: 100%;
  background: ${colors.white};
  position: fixed;
  right: 0;

  ${mediaQuery.xl} {
    position: absolute;
  }
`;

export const CloseButton = styled(Button)`
  position: absolute;
  z-index: -1;
  top: 2.75rem;
  left: -2.5rem;
`;
export const LogoWrapper = styled(Box)`
  min-height: 43px;
  max-width: 174px;
`;
export const List = styled(Box).attrs({ as: "ul" })`
  list-style: none;
  margin: 0;
  margin-top: 5rem;
  padding: 0;
`;
export const ListElement = styled.li`
  padding: 0.5rem 0;
  margin-left: -1rem;
`;
export const NavLink = styled(ReactRouterNavLink)`
  text-decoration: none;
  font-weight: ${fontWeights.light};
  color: ${colors.black.medium};
  padding: 0.5rem 1rem;
  border-radius: ${sizings.radii.md};

  &:hover {
    background: ${colors.gray.light};
  }

  &:active {
    background: ${colors.gray.medium};
  }
`;
export const Overlay = styled(Box)`
  position: fixed;
  z-index: ${zIndicies.sidebarOverlay};
  background: rgba(0, 0, 0, 0.75);
  left: -300px;
  top: -300px;
  right: -300px;
  bottom: -300px;
  content: "";
`;
export const animations = {
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

export const Footer = ({ ...props }) => (
  <Flex
    as="a"
    href="https://github.com/pislagz"
    flexDirection="column"
    color={colors.black.dark}
    target="_blank"
    style={{ textDecoration: "none" }}
    {...props}
  >
    <Text fontWeight="light">
      Made by <b>Pawel Pisulski</b>
    </Text>
    {/* <Text fontWeight="light">
        visit <b>pawelpisulski.pl</b>
      </Text> */}
  </Flex>
);
