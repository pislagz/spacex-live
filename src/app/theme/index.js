import { breakpoints } from "app/theme/breakpoints";
import { texts } from "./texts";
import { colors } from "./colors";
import { components } from "./components";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  breakpoints,
  colors,
  components,
  ...texts,
});
