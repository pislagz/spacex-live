import React from "react";
import { useWindowSize } from "app/hooks/useWindowSize";
import { Box } from "app/components/common/ui";
import { getSanitizedBreakpoint } from "app/styles/theme/breakpoints";

export const TopPadder = ({ intensity }) => {
  const { width, height } = useWindowSize();

  return (
    <>
      {width >= getSanitizedBreakpoint("md") && height > 890 && (
        <Box width="100%" height="0" marginTop={`${intensity}vh`}></Box>
      )}
    </>
  );
};
