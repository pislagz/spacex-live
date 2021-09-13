import {
  compose,
  typography,
  space,
  color,
  border,
  grid,
  layout,
  position,
  shadow,
  flexbox,
  background,
} from "styled-system";
import styled from "styled-components";
// import { motion } from "framer-motion";
export const Box = styled("div")(
  compose(
    typography,
    space,
    color,
    position,
    shadow,
    grid,
    border,
    layout,
    background
  )
);

export const Flex = styled("div").attrs({ display: "flex" })(
  compose(
    typography,
    space,
    color,
    position,
    shadow,
    grid,
    border,
    layout,
    flexbox,
    background
  )
);

export const Text = styled(Box)``;
export const Image = styled(Box).attrs({ as: "img" })``;

export const Wrapper = ({ children, ...props }) => {
  return (
    <Box as="main" minHeight="100%" {...props}>
      {children}
    </Box>
  );
};

export const Container = ({ children, ...props }) => {
  return (
    <Flex
      display="flex"
      width="90%"
      height="100%"
      m="0 auto"
      p={{ _: "1rem 0" }}
      maxWidth={"max-content-width"}
      {...props}
    >
      {children}
    </Flex>
  );
};
