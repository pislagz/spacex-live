import React from "react";
import styled from "styled-components";
import { Box } from "app/components/common/ui";

const Wrapper = styled(Box).attrs({ as: "h4" })`
  /* text-transform: uppercase; */
  white-space: nowrap;
  word-break: none;
`;

Wrapper.defaultProps = {
  color: "transparentWhite",
  fontWeight: "normal",
  fontSize: "xs",
  margin: "0",
  padding: "0",
};

export const Label = ({ ...props }) => (
  <Wrapper
    {...props}
    style={
      props.noUpper ? { textTransform: "none" } : { textTransform: "uppercase" }
    }
  >
    {props.children}
  </Wrapper>
);
