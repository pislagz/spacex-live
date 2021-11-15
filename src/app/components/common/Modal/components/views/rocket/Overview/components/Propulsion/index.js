import React from "react";
import { Flex } from "app/components/common/ui";
import { InfoItem } from "app/components/common/InfoItem";

export const Propulsion = ({ data }) => {
  const { engines } = data;
  const {
    engine_loss_max: maxEngineLoss,
    isp,
    layout,
    number,
    propellant_1: propellant1,
    propellant_2: propellant2,
    thrust_sea_level: seaLevelThrust,
    thrust_to_weight: TWR,
    thrust_vacuum: vacuumThrust,
    type,
    version,
  } = engines;

  return (
    <>
      <Flex flexDirection="column">
        <InfoItem dark label="engine count" info={number} />
        <InfoItem dark label="engine type" info={type} />
        <InfoItem dark label="engine version" info={version} />
        <InfoItem dark label="engine layout" info={layout} />
      </Flex>

      <Flex flexDirection="column">
        <InfoItem dark label="max engine loss" info={maxEngineLoss} />
        <InfoItem dark label="propellant #1" info={propellant1} />
        <InfoItem dark label="propellant #2" info={propellant2} />
      </Flex>
      <Flex flexDirection="column">
        <InfoItem dark label="TWR" info={TWR} />
        <InfoItem dark label="sea level thrust" info={seaLevelThrust.kN} />
        <InfoItem dark label="vacuum thrust" info={vacuumThrust.kN} />
        <InfoItem
          dark
          label="isp (sea/vacuum)"
          info={`${isp.sea_level}/${isp.vacuum}`}
        />
      </Flex>
    </>
  );
};
