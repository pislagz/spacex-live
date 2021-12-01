import { starlink } from "./starlink";
import { launch } from "app/api/launch";
import { weather } from "app/api/weather";
import { rockets } from "app/api/rockets";
import { company } from "app/api/company";
import { history } from "app/api/history";

export const api = {
  launch,
  weather,
  starlink,
  rockets,
  company,
  history,
};
