import { createSlice } from "@reduxjs/toolkit";

export const UNITS = {
  temp: {
    celsius: "c",
    fahrenheit: "f",
  },
  windspeed: {
    ms: "m/s",
    kt: "kt",
  },
};

export const unitSlice = createSlice({
  name: "units",
  initialState: {
    temp: UNITS.temp.celsius,
    windspeed: UNITS.windspeed.ms,
  },

  reducers: {
    setUnit(state, action) {
      state[action.payload.param] = action.payload.unit;
    },
  },
});

export const { setUnit } = unitSlice.actions;

export default unitSlice.reducer;
