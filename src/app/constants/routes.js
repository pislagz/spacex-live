import { Dashboard } from "app/views/Dashboard";
import { Starlink } from "app/views/Starlink";
import { Rockets } from "app/views/Rockets";
import { Launches } from "app/views/Launches";
import { About } from "app/views/About";

export const ROUTES = [
  { name: "Dashboard", route: "/", component: Dashboard },
  { name: "Starlink", route: "/starlink", component: Starlink },
  { name: "Rockets", route: "/rockets", component: Rockets },
  { name: "Launches", route: "/launches", component: Launches },
  { name: "About", route: "/about", component: About },
];
