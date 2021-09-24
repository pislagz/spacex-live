import axios from "axios";
import { SPACEX_API } from "app/api/source";
import {
  getLaunchOptions,
  getLaunchByNumber,
} from "app/api/launch/launchOptions";

const getNextLaunch = async () =>
  await axios.post(
    SPACEX_API + "/v5/launches/query",
    getLaunchOptions({ isUpcoming: true, sortDir: "asc" })
  );

const getPreviousLaunch = async () =>
  await axios.post(
    SPACEX_API + "/v5/launches/query",
    getLaunchOptions({ isUpcoming: false, sortDir: "desc" })
  );

const getLaunchByFlightNumber = async (flightNo) =>
  await axios.post(
    SPACEX_API + "/v5/launches/query/",
    getLaunchByNumber(flightNo)
  );

export const api = {
  getPreviousLaunch,
  getNextLaunch,
  getLaunchByFlightNumber,
};
