import axios from "axios";

const getWeatherData = async (coordinates) =>
  (
    await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=750e57bdaec3cc4c8208faae92e8c059`
    )
  ).data;

export const weather = {
  getWeatherData,
};
