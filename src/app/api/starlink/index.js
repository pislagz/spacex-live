import axios from "axios";
import { SPACEX_API } from "app/api/source";
import { getActiveOptions } from "app/api/starlink/activeOptions";

const getActiveCount = async () =>
  (await axios.post(SPACEX_API + "/v4/starlink/query", getActiveOptions())).data
    .totalDocs;

export const starlink = {
  getActiveCount,
};
