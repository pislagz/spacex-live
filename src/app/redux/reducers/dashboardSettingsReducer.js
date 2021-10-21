import { createSlice } from "@reduxjs/toolkit";
import { SETTINGS } from "app/constants/settings";
import { localZoneName } from "app/utils/parseDate";

const tempSaved = localStorage.getItem("tempSaved");
const windspeedSaved = localStorage.getItem("windspeedSaved");
const timezoneSaved = localStorage.getItem("timezoneSaved");

export const settingsSlice = createSlice({
  name: "dashboardSettings",
  initialState: {
    temp: tempSaved ? tempSaved : SETTINGS.dashboard.temp.celsius,
    windspeed: windspeedSaved
      ? windspeedSaved
      : SETTINGS.dashboard.windspeed.ms,
    timezone: timezoneSaved ? timezoneSaved : SETTINGS.dashboard.timezone.utc,
    localZoneName: localZoneName,
  },

  reducers: {
    setSetting(state, action) {
      state[action.payload.param] = action.payload.setting;
    },
  },
});

export const { setSetting } = settingsSlice.actions;

export default settingsSlice.reducer;
