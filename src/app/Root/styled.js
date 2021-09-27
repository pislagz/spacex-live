import styled from "styled-components";
import { Flex, Box } from "app/components/common/ui";
import {
  mediaQuery,
  getSanitizedBreakpoint,
} from "app/styles/theme/breakpoints";
import { sizings } from "app/styles/theme/sizings";

export const OuterBackground = styled(Flex)`
  width: 100%;
  height: 100%;
  background: #efefef;
  justify-content: center;
  align-items: center;
`;

export const InnerBackground = styled(Box)`
  width: 100%;
  height: 100%;
  background-image: url("https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvYXNzZXRzL2Y0Njk2ZTVhLTVmMzItNGNmNi05NmQyLTQ4ZTQwMzE0NDVkZjc1YWRmYmJlMDQwZjU4MWU0OV80ODQ4ODk5NTg0N19jY2M3MGYyNjA4X28uanBnIl0sWyJwIiwiY29udmVydCIsIiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXSxbInAiLCJ0aHVtYiIsIjEyODB4PiJdXQ/48488995847_ccc70f2608_o.jpg");
  background-size: cover;

  //adding 110 pixels to make the app feel more reasonable on full hd screens
  ${mediaQuery.custom(getSanitizedBreakpoint("max") + 110)} {
    height: 1204px;
    max-height: 90vh;
    width: 1920px;
    position: relative;
    border-radius: ${sizings.radii.md};
    overflow: hidden;
    box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.1);
  } ;
`;

export const Gradient = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  content: "";

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;
