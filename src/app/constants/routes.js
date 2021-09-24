import { Dashboard } from "app/views/Dashboard";
import { Starlink } from "app/views/Starlink";

export const ROUTES = [
  { name: "Dashboard", route: "/", component: Dashboard },
  { name: "Starlink", route: "/starlink", component: Starlink },
  // { name: "Rocket", route: "/rocket" },
  // { name: "Launches", route: "launches" },
  // { name: "About", route: "about" },
];
