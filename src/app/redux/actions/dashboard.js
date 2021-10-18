import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "app/api";
import { COORDINATES } from "app/constants/coordinates";

export const fetchDashboardData = createAsyncThunk(
  "dashboard/data",
  async (dispatch, getState) => {
    const [
      nextLaunchResponse,
      prevLaunchResponse,
      canaveralResponse,
      starbaseResponse,
      vandenbergResponse,
    ] = await Promise.all([
      api.launch.getNextLaunch(),
      api.launch.getPrevLaunch(),
      api.weather.getWeatherData(COORDINATES.CANAVERAL),
      api.weather.getWeatherData(COORDINATES.STARBASE),
      api.weather.getWeatherData(COORDINATES.VANDENBERG),
    ]);

    console.log({ prevLaunchResponse, nextLaunchResponse });
    console.log({ canaveralResponse, starbaseResponse, vandenbergResponse });

    return {
      launches: {
        prevLaunch: prevLaunchResponse,
        nextLaunch: nextLaunchResponse,
      },
      weather: {
        canaveral: canaveralResponse,
        starbase: starbaseResponse,
        vandenberg: vandenbergResponse,
      },
    };
  }
);

export const dashboard = {
  fetchDashboardData,
};
