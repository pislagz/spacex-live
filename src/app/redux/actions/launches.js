import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "app/api";

export const fetchAllLaunches = createAsyncThunk(
  "launches/data",
  async (dispatch, getState) => {
    const allLaunchesResponse = await api.launch.getAllLaunches();

    console.log({ allLaunchesResponse });

    return {
      launches: [...allLaunchesResponse],
    };
  }
);

export const launches = {
  fetchAllLaunches,
};
