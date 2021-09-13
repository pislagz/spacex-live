export const breakpointSizes = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

export const breakpoints = ["30em", "48em", "62em", "80em", "96em"];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
breakpoints["2xl"] = breakpoints[4];

export const mediaQuery = {
  sm: `@media screen and (min-width: ${breakpoints.sm})`,
  md: `@media screen and (min-width: ${breakpoints.md})`,
  lg: `@media screen and (min-width: ${breakpoints.lg})`,
  xl: `@media screen and (min-width: ${breakpoints.xl})`,
  "2xl": `@media screen and (min-width: ${breakpoints["2xl"]})`,
};
