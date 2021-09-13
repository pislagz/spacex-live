export const colors = {
  blue: {
    light: "#189CD8",
    medium: "#24619C",
    dark: "#184A73",
  },
};

export const gradients = {
  primary: `linear-gradient(90deg, ${colors.blue.light}, ${colors.blue.medium})`,
  whiteBottom:
    "linear-gradient(180deg, rgba(255,255,255, 0.7) 0%, rgba(255,255,255,1))",
  whiteTopAndBottom:
    "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,1) 100%)",
};
