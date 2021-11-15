import { General } from "app/components/common/Modal/components/views/rocket/Overview/components/General";
import { Dimensions } from "app/components/common/Modal/components/views/rocket/Overview/components/Dimensions";
import { Propulsion } from "app/components/common/Modal/components/views/rocket/Overview/components/Propulsion";
import { FirstStage } from "app/components/common/Modal/components/views/rocket/Overview/components/FirstStage";
import { SecondStage } from "app/components/common/Modal/components/views/rocket/Overview/components/SecondStage";

export const OPTIONS = [
  { label: "General", component: General, short: "general" },
  { label: "Dimensions", component: Dimensions, short: "dimensions" },
  { label: "Propulsion", component: Propulsion, short: "propulsion" },
  { label: "1st stage", component: FirstStage, short: "firstStage" },
  { label: "2nd stage", component: SecondStage, short: "secondStage" },
];

export const optionsList = OPTIONS.map(({ label }) => label);
