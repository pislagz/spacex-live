import { configureStore } from "@reduxjs/toolkit";
import dashboardSettingsReducer from "app/redux/slices/dashboardSettingsSlice";
import dashboardDataReducer from "app/redux/slices/dashboardDataSlice";
import modalReducer from "app/redux/slices/modalSlice";
import rocketsDataReducer from "app/redux/slices/rocketsDataSlice";
import launchesDataReducer from "app/redux/slices/launchesSlice";
import weatherDataReducer from "app/redux/slices/weatherSlice";
import companyDataReducer from "app/redux/slices/companySlice";
import historyDataReducer from "app/redux/slices/historySlice";
import currentRouteReducer from "app/redux/slices/routeSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    dashboardSettings: dashboardSettingsReducer,
    dashboardData: dashboardDataReducer,
    rocketsData: rocketsDataReducer,
    launchesData: launchesDataReducer,
    weatherData: weatherDataReducer,
    companyData: companyDataReducer,
    historyData: historyDataReducer,
    currentRoute: currentRouteReducer,
  },
});
