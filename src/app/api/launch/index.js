import axios from "axios";
import { SPACEX_API } from "app/api/source";
import {
  getLaunchOptions,
  getBasicOptions,
} from "app/api/launch/launchOptions";
import { flight } from "app/api/launch/flight";

const getNextLaunch = async () =>
  (
    await axios.post(
      SPACEX_API + "/v5/launches/query",
      getLaunchOptions({ query: flight.next, sortDir: "asc" })
    )
  ).data.docs?.[0];

const getPrevLaunch = async () =>
  (
    await axios.post(
      SPACEX_API + "/v5/launches/query",
      getLaunchOptions({ query: flight.prev, sortDir: "desc" })
    )
  ).data.docs?.[0];

const getLaunchByFlightNumber = async (flightNumber) =>
  (
    await axios.post(
      SPACEX_API + "/v5/launches/query/",
      getLaunchOptions({ query: { flight_number: flightNumber } })
    )
  ).data.docs?.[0];

const getAllLaunches = async () =>
  (await axios.post(SPACEX_API + "/v5/launches/query", getBasicOptions())).data
    .docs;

export const launch = {
  getPrevLaunch,
  getNextLaunch,
  getLaunchByFlightNumber,
  getAllLaunches,
};
