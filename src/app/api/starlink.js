import { SPACEX_API } from "./source";

const getAllStarlinks = async () => {
  return await axios.get(SPACEX_API + "/starlinks");
};

// const getStarlinkById = async (id) => {
//   return await axios.get(WEATHER_API + "/starlink/" + id);
// };

export const starlink = {
  getAllStarlinks,
  getStarlinkById,
};
