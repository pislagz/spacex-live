import { createSlice } from "@reduxjs/toolkit";
import { actions } from "app/redux/actions";

export const rocketsSlice = createSlice({
  name: "rocketsData",
  initialState: {
    rockets: [],
    status: "loading",
  },
  extraReducers: {
    [actions.rockets.fetchRocketsData.pending]: (state, action) => {
      state.status = "loading";
    },
    [actions.rockets.fetchRocketsData.fulfilled]: (state, action) => {
      state.status = "success";
      state.rockets = action.payload.rockets;
    },
    [actions.rockets.fetchRocketsData.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default rocketsSlice.reducer;
