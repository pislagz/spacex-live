import React, { useEffect, useState } from "react";

import useBreakpoint from "app/hooks/useBreakpoint";
import { Mobile } from "./components/Mobile";
import { Desktop } from "./components/Desktop";

export const Starlink = () => {
  const bp = useBreakpoint();
  const isBigScreen =
    bp === "lg" || bp === "xl" || bp === "2xl" || bp === "max";
  const [isGlobeVisible, setIsGlobeVisible] = useState(isBigScreen);

  useEffect(() => {
    setIsGlobeVisible(isBigScreen);
  }, [isBigScreen]);

  return isGlobeVisible ? <Desktop bp={bp} /> : <Mobile />;
};
