import { createSlice } from "@reduxjs/toolkit";
import { actions } from "app/redux/actions";

export const weatherSlice = createSlice({
  name: "weatherData",
  initialState: {
    weather: {},
    status: "idle",
  },
  extraReducers: {
    [actions.weather.fetchWeatherData.pending]: (state, action) => {
      state.status = "loading";
    },
    [actions.weather.fetchWeatherData.fulfilled]: (state, action) => {
      state.status = "success";
      state.weather = action.payload.weather;
    },
    [actions.weather.fetchWeatherData.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default weatherSlice.reducer;
