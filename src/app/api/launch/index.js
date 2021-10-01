import axios from "axios";
import { SPACEX_API } from "app/api/source";
import {
  getLaunchOptions,
  getLaunchByFlightNumberOptions,
} from "app/api/launch/launchOptions";

const getNextLaunch = async () =>
  (
    await axios.post(
      SPACEX_API + "/v5/launches/query",
      getLaunchOptions({ isUpcoming: true, sortDir: "asc" })
    )
  ).data.docs?.[0];

const getPrevLaunch = async () =>
  (
    await axios.post(
      SPACEX_API + "/v5/launches/query",
      getLaunchOptions({ isUpcoming: false, sortDir: "desc" })
    )
  ).data.docs?.[0];

const getLaunchByFlightNumber = async (flightNumber) =>
  (
    await axios.post(
      SPACEX_API + "/v5/launches/query/",
      getLaunchByFlightNumberOptions(flightNumber)
    )
  ).data.docs?.[0];

export const api = {
  getPrevLaunch,
  getNextLaunch,
  getLaunchByFlightNumber,
};
