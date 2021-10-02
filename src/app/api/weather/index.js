import axios from "axios";

const getWeatherData = async (coordinates) =>
  (
    await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=bbf42423a4947553760248441e9ab27a`
    )
  ).data;

export const weather = {
  getWeatherData,
};
