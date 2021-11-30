import axios from "axios";
import { SPACEX_API } from "app/api/source";

const getHistoryData = async () =>
  (await axios.get(SPACEX_API + "/v4/history")).data;

export const history = {
  getHistoryData,
};
