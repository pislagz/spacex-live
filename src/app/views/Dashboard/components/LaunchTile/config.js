import { Payload } from "assets/icons/buttons/Payload";
import { Crew } from "assets/icons/buttons/Crew";
import { Customers } from "assets/icons/buttons/Customers";
import { Launchpad } from "assets/icons/buttons/Launchpad";
import { Landpad } from "assets/icons/buttons/Landpad";
import { Rocket } from "assets/icons/buttons/Rocket";
import { RocketDetailsModal } from "app/views/Dashboard/components/LaunchTile/modals/Rocket";
import { PayloadDetailsModal } from "app/views/Dashboard/components/LaunchTile/modals/Payload";
import { CrewDetailsModal } from "app/views/Dashboard/components/LaunchTile/modals/Crew";
import { CustomersDetailsModal } from "app/views/Dashboard/components/LaunchTile/modals/Customers";
import { LaunchpadDetailsModal } from "app/views/Dashboard/components/LaunchTile/modals/Launchpad";
import { LandpadDetailsModal } from "app/views/Dashboard/components/LaunchTile/modals/Landpad";

export const CONFIG = {
  details: [
    {
      icon: Rocket,
      label: "rocket",
      modal: RocketDetailsModal,
    },
    {
      icon: Payload,
      label: "payload",
      modal: PayloadDetailsModal,
    },
    {
      icon: Crew,
      label: "crew",
      modal: CrewDetailsModal,
    },
    {
      icon: Customers,
      label: "customers",
      modal: CustomersDetailsModal,
    },
    {
      icon: Launchpad,
      label: "launchpad",
      modal: LaunchpadDetailsModal,
    },
    {
      icon: Landpad,
      label: "landpad",
      modal: LandpadDetailsModal,
    },
  ],
};
