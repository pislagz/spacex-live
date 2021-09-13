import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { texts } from "./texts";
import { sizings } from "./sizings";
import { shadows } from "./shadows";

export const theme = {
  breakpoints,
  colors,
  ...texts,
  ...sizings,
  shadows,
};
