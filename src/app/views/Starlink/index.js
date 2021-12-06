import React, { useEffect, useState } from "react";

import useBreakpoint from "app/hooks/useBreakpoint";
import { Mobile } from "./components/Mobile";
import { Desktop } from "./components/Desktop";

export const Starlink = () => {
  const bp = useBreakpoint();
  const isBigScreen =
    bp === "" || bp === "lg" || bp === "xl" || bp === "2xl" || bp === "max";
  const [isGlobeVisible, setIsGlobeVisible] = useState(isBigScreen);

  useEffect(() => {
    console.log({ bp });
    setIsGlobeVisible(isBigScreen);
  }, [isBigScreen, isGlobeVisible, bp]);

  return isGlobeVisible ? <Desktop bp={bp} /> : <Mobile />;
};
