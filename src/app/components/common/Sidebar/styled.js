import { Box } from "app/components/common/ui";
import { Button } from "app/components/common/ui/Button";
import { fontWeights } from "app/styles/theme/texts";
import styled from "styled-components";
import { zIndicies } from "app/styles/theme/zIndicies";
import { Link } from "react-router-dom";
import { colors } from "app/styles/theme/colors";
import { mediaQuery } from "app/styles/theme/breakpoints";

export const Wrapper = styled(Box)`
  z-index: ${zIndicies.sidebar};
  height: 100%;
  background: ${colors.white};
  position: fixed;
  right: 0;

  ${mediaQuery.lg} {
    position: absolute;
  }
`;

export const CloseWrapper = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: -1.5rem;
  margin-left: -1rem;
`;
export const CloseButton = styled(Button)`
  padding: 1rem;
  min-width: 33px;
  min-height: 21px;
`;

export const List = styled(Box).attrs({ as: "ul" })`
  list-style: none;
  margin: 0;
  margin-top: 5rem;
  padding: 0;
`;

export const ListElement = styled.li`
  padding: 0.5rem 0;
  margin-left: -0.5rem;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: ${fontWeights.light};
  color: ${colors.black.medium};
  padding: 0 0.5rem;
  border-radius: 5px;

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
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
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
