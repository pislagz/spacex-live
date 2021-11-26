import axios from "axios";
import { SPACEX_API } from "app/api/source";

const getCompanyData = async () =>
  (await axios.get(SPACEX_API + "/v4/company")).data;

export const company = {
  getCompanyData,
};
