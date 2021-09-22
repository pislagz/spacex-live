import styled from "styled-components";
import { Flex, Box, Image } from "app/components/common/ui";
import {
  mediaQuery,
  getSanitizedBreakpoint,
} from "app/styles/theme/breakpoints";
import { zIndicies } from "app/styles/theme/zIndicies";
import { space } from "app/styles/theme/sizings";

export const OuterWrapper = styled(Flex)`
  width: 100%;
  height: 100%;
  background: #efefef;
  justify-content: center;
  align-items: center;
  position: absolute;
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
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    );

    ${mediaQuery.max} {
      position: absolute;
    }
  }

  //adding 110 pixels to make the app feel more reasonable on full hd screens
  ${mediaQuery.custom(getSanitizedBreakpoint("max") + 110)} {
    height: 1204px;
    max-height: 90vh;
    width: 1920px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.1);
  } ;
`;

const Picture = styled(Image)`
  object-fit: cover;
`;

export const InnerWrapper = ({ children }) => (
  <Inner position={{ lg: "relative" }}>
    <Picture
      //height set to 100vh to avoid bouncing on mobile toolbars collapse
      height="100vh"
      alt=""
      position={{ _: "fixed", max: "absolute" }}
      width={{ sm: "100%" }}
      left={{ lg: space.bigSidebar }}
      zIndex={zIndicies.photoBackground}
      src={
        "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvYXNzZXRzL2Y0Njk2ZTVhLTVmMzItNGNmNi05NmQyLTQ4ZTQwMzE0NDVkZjc1YWRmYmJlMDQwZjU4MWU0OV80ODQ4ODk5NTg0N19jY2M3MGYyNjA4X28uanBnIl0sWyJwIiwiY29udmVydCIsIiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXSxbInAiLCJ0aHVtYiIsIjEyODB4PiJdXQ/48488995847_ccc70f2608_o.jpg"
      }
    />
    {children}
  </Inner>
);
