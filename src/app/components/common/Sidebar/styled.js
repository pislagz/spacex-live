import { Box, Flex, Text } from "app/components/common/ui";
import { Button } from "app/components/common/ui/Button";
import { fontWeights } from "app/styles/theme/texts";
import styled from "styled-components";
import { zIndicies } from "app/styles/theme/zIndicies";
import { Link } from "react-router-dom";
import { colors } from "app/styles/theme/colors";
import { mediaQuery } from "app/styles/theme/breakpoints";
import { sizings } from "app/styles/theme/sizings";

export const S = {
  Wrapper: styled(Box)`
    z-index: ${zIndicies.sidebar};
    height: 100%;
    background: ${colors.white};
    position: fixed;
    right: 0;

    ${mediaQuery.xl} {
      position: absolute;
    }
  `,
  CloseWrapper: styled(Box)`
    display: flex;
    width: 100%;
    margin-top: -1.5rem;
    margin-left: -1rem;
  `,
  CloseButton: styled(Button)`
    padding: 1rem;
    min-width: 33px;
    min-height: 21px;
  `,
  List: styled(Box).attrs({ as: "ul" })`
    list-style: none;
    margin: 0;
    margin-top: 5rem;
    padding: 0;
  `,
  ListElement: styled.li`
    padding: 0.5rem 0;
    margin-left: -1rem;
  `,
  NavLink: styled(Link)`
    text-decoration: none;
    font-weight: ${fontWeights.light};
    color: ${colors.black.medium};
    padding: 0.5rem 1rem;
    border-radius: ${sizings.radii.sm};

    &:hover {
      background: ${colors.gray.light};
    }

    &:active {
      background: ${colors.gray.medium};
    }
  `,
  Overlay: styled(Box)`
    position: fixed;
    z-index: ${zIndicies.sidebarOverlay};
    background: rgba(0, 0, 0, 0.75);
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    content: "";
  `,
  animations: {
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
  },
  Footer: ({ ...props }) => (
    <Flex flexDirection="column" {...props}>
      <Text fontWeight="light">
        Made by <b>Pawel Pisulski</b>
      </Text>
      <Text fontWeight="light">
        visit <b>pawelpisulski.pl</b>
      </Text>
    </Flex>
  ),
};
