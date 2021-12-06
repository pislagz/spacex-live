import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "app/api";
import { getDetailsList } from "app/utils/getDetailsList";

export const fetchDashboardData = createAsyncThunk(
  "dashboard/data",
  async (dispatch, getState) => {
    const [nextLaunchResponse, prevLaunchResponse] = await Promise.all([
      api.launch.getNextLaunch(),
      api.launch.getPrevLaunch(),
    ]);

    return {
      launches: {
        prev: {
          data: prevLaunchResponse,
          detailsList: getDetailsList(prevLaunchResponse),
        },
        next: {
          data: nextLaunchResponse,
          detailsList: getDetailsList(nextLaunchResponse),
        },
      },
    };
  }
);

export const dashboard = {
  fetchDashboardData,
};
