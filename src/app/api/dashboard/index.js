import axios from "axios";
import { SPACEX_API } from "app/api/source";
import { nextOrPrevQuery, flightNoQuery } from "app/api/dashboard/query";

const getUpcomingOrPreviousLaunch = async (upcomingOrPrevious) => {
  try {
    let res = await axios.post(
      SPACEX_API + "/v5/launches/query",
      nextOrPrevQuery(upcomingOrPrevious)
    );

    console.log(res.data.docs[0]);
  } catch (err) {
    console.log(err);
  }
};

const getLaunchByFlightNumber = async (flightNo) =>
  await axios.post(SPACEX_API + "/v5/launches/query/", flightNoQuery(flightNo));

export const dashboard = {
  getUpcomingOrPreviousLaunch,
  getLaunchByFlightNumber,
};
