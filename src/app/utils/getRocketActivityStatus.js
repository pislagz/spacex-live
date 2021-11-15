import { colors } from "app/styles/theme/colors";

export const getActivityStatus = (name, isActive) =>
  !isActive ? (name === "Starship" ? "In development" : "Retired") : "Active";

export const colorizeStatus = (status) =>
  status === "Active"
    ? colors.rocketActivity.active
    : status === "In development"
    ? colors.rocketActivity.inDevelopment
    : colors.rocketActivity.retired;
