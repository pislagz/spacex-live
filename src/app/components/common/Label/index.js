import React from "react";
import styled from "styled-components";
import { Box } from "app/components/common/ui";
import { colors } from "app/styles/theme/colors";
import { fontSizes, fontWeights } from "app/styles/theme/texts";

const Wrapper = styled(Box).attrs({ as: "h4" })`
  text-transform: uppercase;
`;

Wrapper.defaultProps = {
  color: colors.transparentWhite,
  fontWeight: fontWeights.normal,
  fontSize: fontSizes.xs,
  margin: "0",
  padding: "0",
};

export const Label = (props) => <Wrapper {...props}>{props.children}</Wrapper>;
