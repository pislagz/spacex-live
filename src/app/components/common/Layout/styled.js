import styled from "styled-components";
import { Flex, Box, Image } from "app/components/common/ui";
import {
  mediaQuery,
  getSanitizedBreakpoint,
} from "app/styles/theme/breakpoints";
import { zIndicies } from "app/styles/theme/zIndicies";
import { sizings, space } from "app/styles/theme/sizings";
import { isMobile } from "react-device-detect";

export const OuterWrapper = styled(Flex)`
  width: 100%;
  height: 100%;
  background: #efefef;
  justify-content: center;
  align-items: center;
  position: absolute;
  overflow: ${({ isMobileMenuVisible }) =>
    isMobileMenuVisible ? "hidden" : "unset"};
  padding-right: ${({ isMobileMenuVisible }) =>
    isMobileMenuVisible && !isMobile ? "10px" : "0px"};
  z-index: ${zIndicies.absoluteBg};
`;

const Inner = styled(Box)`
  width: 100%;
  height: 100%;

  &:after {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    content: "";
    z-index: ${zIndicies.photoBackgroundGradient};

    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    );

    ${mediaQuery.xl} {
      position: absolute;
    }
  }

  ${mediaQuery.custom(getSanitizedBreakpoint("xl"))} {
    height: 900px;
    max-height: 90vh;
    width: 1280px;
    position: relative;
    border-radius: ${sizings.radii.lg};
    overflow: hidden;
    box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.1);
  } ;
`;

const Picture = styled(Image)`
  object-fit: cover;

  ${mediaQuery.lg} {
    margin-left: -100px;
  }
`;

export const InnerWrapper = ({ children }) => (
  <Inner position={{ lg: "relative" }}>
    <Picture
      //height set to 100vh to avoid bouncing on mobile toolbars collapse
      height={{ _: "100vh", lg: "100%" }}
      alt=""
      position={{ _: "fixed", xl: "absolute" }}
      width={{ sm: "100%" }}
      left={{ lg: space.bigSidebar }}
      zIndex={zIndicies.photoBackground}
      src={"https://live.staticflickr.com/7706/26751237322_5a52540ea3_h.jpg"}
    />
    {children}
  </Inner>
);
