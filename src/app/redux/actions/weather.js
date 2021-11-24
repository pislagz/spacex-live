import { createAsyncThunk } from "@reduxjs/toolkit";
import { COORDINATES } from "app/constants/coordinates";
import { api } from "app/api";

export const fetchWeatherData = createAsyncThunk(
  "weather/data",
  async (dispatch, getState) => {
    const [canaveralResponse, starbaseResponse, vandenbergResponse] =
      await Promise.all([
        api.weather.getWeatherData(COORDINATES.CANAVERAL),
        api.weather.getWeatherData(COORDINATES.STARBASE),
        api.weather.getWeatherData(COORDINATES.VANDENBERG),
      ]);

    console.log({ canaveralResponse, starbaseResponse, vandenbergResponse });

    return {
      weather: {
        canaveral: canaveralResponse,
        starbase: starbaseResponse,
        vandenberg: vandenbergResponse,
      },
    };
  }
);

export const weather = {
  fetchWeatherData,
};
