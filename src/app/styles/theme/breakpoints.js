export const breakpoints = ["480px", "768px", "992px", "1280px", "1536px"];

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

export const getSanitizedBreakpoint = (size) => +breakpoints[size].slice(0, -2);
