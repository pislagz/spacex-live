import { colors } from "app/styles/theme/colors";

export const colorizeRocketStatus = (status) =>
  status === "Active"
    ? colors.availability.green
    : status === "In development"
    ? colors.availability.orange
    : colors.availability.red;

export const colorizeMissionStatus = (status) =>
  status === "Success"
    ? colors.availability.green
    : status === "Failure"
    ? colors.availability.red
    : colors.transparent;
