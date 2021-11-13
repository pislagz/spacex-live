import axios from "axios";
import { SPACEX_API } from "app/api/source";

const getRockets = async () =>
  (await axios.get(SPACEX_API + "/v4/rockets")).data;

export const rockets = {
  getRockets,
};
