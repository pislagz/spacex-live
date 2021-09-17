import { Dashboard } from "app/views/Dashboard";
import { Starlink } from "../views/Starlink";

export const ROUTES = [
  { name: "Dashboard", route: "/dashboard", component: Dashboard },
  { name: "Starlink", route: "/starlink", component: Starlink },
  // { name: "Rocket", route: "/rocket" },
  // { name: "Launches", route: "launches" },
  // { name: "About", route: "about" },
];
