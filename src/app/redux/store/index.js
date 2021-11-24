import { configureStore } from "@reduxjs/toolkit";
import dashboardSettingsReducer from "app/redux/slices/dashboardSettingsSlice";
import dashboardDataReducer from "app/redux/slices/dashboardDataSlice";
import modalReducer from "app/redux/slices/modalSlice";
import rocketsDataReducer from "app/redux/slices/rocketsDataSlice";
import launchesDataReducer from "app/redux/slices/launchesSlice";
import weatherDataReducer from "app/redux/slices/weatherSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    dashboardSettings: dashboardSettingsReducer,
    dashboardData: dashboardDataReducer,
    rocketsData: rocketsDataReducer,
    launchesData: launchesDataReducer,
    weatherData: weatherDataReducer,
  },
});
