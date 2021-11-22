import { createSlice } from "@reduxjs/toolkit";
import { actions } from "app/redux/actions";

export const launchesSlice = createSlice({
  name: "launchesData",
  initialState: {
    launches: [],
    status: "loading",
  },
  extraReducers: {
    [actions.launches.fetchAllLaunches.pending]: (state, action) => {
      state.status = "loading";
    },
    [actions.launches.fetchAllLaunches.fulfilled]: (state, action) => {
      state.status = "success";
      state.launches = action.payload.launches;
    },
    [actions.launches.fetchAllLaunches.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default launchesSlice.reducer;
