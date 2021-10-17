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

const tempSaved = localStorage.getItem("tempSaved");
const windspeedSaved = localStorage.getItem("windspeedSaved");

export const unitSlice = createSlice({
  name: "units",
  initialState: {
    temp: tempSaved ? tempSaved : UNITS.temp.celsius,
    windspeed: windspeedSaved ? windspeedSaved : UNITS.windspeed.ms,
  },

  reducers: {
    setUnit(state, action) {
      state[action.payload.param] = action.payload.unit;
    },
  },
});

export const { setUnit } = unitSlice.actions;

export default unitSlice.reducer;
