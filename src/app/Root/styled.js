import styled from "styled-components";
import { Flex, Box } from "app/components/common/ui";
import {
  mediaQuery,
  getSanitizedBreakpoint,
} from "app/styles/theme/breakpoints";

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
  background-image: url("https://camo.githubusercontent.com/2a2dfb8b139de852f33a0a268fad5a1bf5ed32b459f3193fe296a26eb9a54e4d/68747470733a2f2f6c6976652e737461746963666c69636b722e636f6d2f36353533352f34393138353134393132325f333766356335326534335f6b2e6a7067");
  background-size: cover;

  //adding 110 pixels to make the app feel more reasonable on full hd screens
  ${mediaQuery.custom(getSanitizedBreakpoint("max") + 110)} {
    max-height: 90vh;
    width: 1920px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.1);
  } ;
`;

export const Gradient = styled(Box).attrs({ as: "main" })`
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
