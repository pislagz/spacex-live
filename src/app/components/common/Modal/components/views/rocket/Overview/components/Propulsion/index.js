import React from "react";
import { InfoItem } from "app/components/common/InfoItem";
import {
  firstToUpperCase,
  everyFirstToUpperCase,
} from "app/utils/textFormatting";
import { Flex } from "app/components/common/ui";

export const Propulsion = ({ data }) => {
  const { engines } = data;
  const {
    engine_loss_max: maxEngineLoss,
    isp,
    number,
    propellant_1: propellant1,
    propellant_2: propellant2,
    thrust_sea_level: seaLevelThrust,
    thrust_to_weight: TWR,
    thrust_vacuum: vacuumThrust,
    type,
    version,
  } = engines;

  const content = [
    { label: "engine type", info: firstToUpperCase(`${type} ${version}`) },
    { label: "engine count", info: number },
    { label: "TWR", info: TWR },
    { label: "sea level thrust", info: seaLevelThrust.kN },
    { label: "vacuum thrust", info: vacuumThrust.kN },
    { label: "isp (sea/vacuum)", info: `${isp.sea_level}/${isp.vacuum}` },
    { label: "propellant #1", info: everyFirstToUpperCase(propellant1) },
    { label: "propellant #2", info: everyFirstToUpperCase(propellant2) },
    {
      label: "max engine loss",
      info: maxEngineLoss !== null ? maxEngineLoss : "Unknown",
    },
  ];

  return (
    <Flex flexWrap="wrap">
      {content.map(({ label, info }) => (
        <Flex
          key={label}
          width={{ _: "100px", sm: "120px", md: "150px" }}
          m="xs"
        >
          <InfoItem dark label={label} info={info} />
        </Flex>
      ))}
    </Flex>
  );
};
