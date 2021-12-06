import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "app/api";

export const fetchActiveStarlinks = createAsyncThunk(
  "activeStarlinks/data",
  async (dispatch, getState) => {
    const [activeStarlinksResponse] = await Promise.all([
      api.starlink.getActiveCount(),
    ]);

    return {
      activeStarlinks: {
        activeCount: activeStarlinksResponse,
      },
    };
  }
);

export const activeStarlinks = {
  fetchActiveStarlinks,
};
