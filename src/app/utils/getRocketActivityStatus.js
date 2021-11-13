export const getActivityStatus = (name, isActive) =>
  !isActive ? (name === "Starship" ? "In development" : "Retired") : "Active";

export const colorizeStatus = (status) =>
  status === "Active"
    ? "rgba(29,143,36,0.6)"
    : status === "In development"
    ? "rgba(255, 179, 3,0.5)"
    : "rgba(186,17,17,0.5)";
