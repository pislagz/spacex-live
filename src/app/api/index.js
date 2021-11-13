import { starlink } from "./starlink";
import { launch } from "app/api/launch";
import { weather } from "app/api/weather";
import { rockets } from "app/api/rockets";

export const api = {
  launch,
  weather,
  starlink,
  rockets,
};
