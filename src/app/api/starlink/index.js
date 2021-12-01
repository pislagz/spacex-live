import axios from "axios";
import { SPACEX_API } from "app/api/source";
import { getActiveOptions } from "app/api/starlink/activeOptions";
import { getSatsOptions } from "app/api/starlink/satsOptions";

const getActiveCount = async () =>
  (await axios.post(SPACEX_API + "/v4/starlink/query", getActiveOptions())).data
    .totalDocs;

const getSatsPositions = async () =>
  (await axios.post(SPACEX_API + "/v4/starlink/query", getSatsOptions())).data;

export const starlink = {
  getActiveCount,
  getSatsPositions,
};
