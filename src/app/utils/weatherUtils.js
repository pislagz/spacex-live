const convertKelvin = (temp, unit) =>
  unit === "c"
    ? `${Math.round(temp - 273.15)}°C`
    : unit === "f"
    ? `${Math.round((temp - 273.15) * (9 / 5) + 32)}°F`
    : "Wrong temp. format!";

const displayWindSpeed = (windspeed, unit) =>
  unit === "m/s"
    ? `${Math.round(windspeed)} m/s`
    : unit === "kt"
    ? `${Math.round(windspeed * 1.943844)} kt`
    : "Wrong wind syntax!";

export const weatherUtils = {
  displayWindSpeed,
  convertKelvin,
};
