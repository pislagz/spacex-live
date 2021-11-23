export const getRocketActivityStatus = (name, isActive) =>
  !isActive ? (name === "Starship" ? "In development" : "Retired") : "Active";

export const getMissionStatus = (isSuccess, isUpcoming) =>
  isUpcoming ? "Upcoming" : isSuccess ? "Success" : "Failure";
