import { createSlice } from "@reduxjs/toolkit";
import { actions } from "app/redux/actions";

export const starlinkSlice = createSlice({
  name: "starlinkData",
  initialState: {
    starlinks: null,
    status: "idle",
  },
  extraReducers: {
    [actions.starlink.fetchStarlinkData.pending]: (state, action) => {
      state.status = "loading";
    },
    [actions.starlink.fetchStarlinkData.fulfilled]: (state, action) => {
      state.status = "success";
      state.starlinks = action.payload.starlinks;
    },
    [actions.starlink.fetchStarlinkData.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default starlinkSlice.reducer;
