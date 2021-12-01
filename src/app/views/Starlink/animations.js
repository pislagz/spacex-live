export const pageVariantsAnim = {
    initial: {
      opacity: 0,
    },
    in: {
      transition: { duration: 1, ease: "easeOut" },
      opacity: 1,
      staggerChildren: 1,
    },
    out: {
      opacity: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };
  
  export const modalAnim = {
    initial: {
      opacity: 0,
    },
    in: {
      transition: { duration: 0.5, ease: "easeOut" },
      opacity: 1,
      staggerChildren: 1,
    },
    out: {
      opacity: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };
  
  export const bottomToTopAnim = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.25 },
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };
  
  export const sideBarAnim = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 160px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(25px at 161px 39px)",
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  
  export const rightToLeftAnim = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, type: "tween" },
    },
    exit: {
      opacity: 0,
      x: -100,
    },
  };
  
  export const showLaunchesList = {
    initial: {
      opacity: 0,
      y: 100,
    },
    in: {
      transition: { duration: 1, ease: "easeOut" },
      opacity: 1,
      y: 0,
      // when: "beforeChildren",
      staggerChildren: 1,
    },
    out: {
      y: 100,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };
  
  export const GalleryAnim = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };
  
  export const launchDetailsAnim = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };
  
  export const opacityAnim = {
    initial: {
      opacity: 0,
    },
    in: {
      transition: { duration: 1, ease: "easeOut" },
      opacity: 1,
    },
  };
  