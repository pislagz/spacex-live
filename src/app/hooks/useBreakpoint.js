import { useEffect, useState } from "react";

const names = ["none", "sm", "md", "lg", "xl", "2xl", "max"];

const useBreakpoint = () => {
  const [breakpoint, setBreakPoint] = useState("");
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    if (0 < windowSize.width && windowSize.width < 480) {
      setBreakPoint(names[0]);
    }
    if (480 < windowSize.width && windowSize.width < 768) {
      setBreakPoint(names[1]);
    }
    if (768 < windowSize.width && windowSize.width < 992) {
      setBreakPoint(names[2]);
    }
    if (992 < windowSize.width && windowSize.width < 1280) {
      setBreakPoint(names[3]);
    }
    if (1280 < windowSize.width && windowSize.width < 1536) {
      setBreakPoint(names[4]);
    }

    if (1536 < windowSize.width && windowSize.width < 1920) {
      setBreakPoint(names[5]);
    }

    if (windowSize.width >= 1920) {
      setBreakPoint(names[6]);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width]);
  return breakpoint;
};

export default useBreakpoint;
