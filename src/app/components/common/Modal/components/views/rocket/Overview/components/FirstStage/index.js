import React from "react";
import { Flex } from "app/components/common/ui";
import { InfoItem } from "app/components/common/InfoItem";

export const FirstStage = ({ data }) => {
  const { firstStage } = data;
  const {
    burn_time_sec: burnTime,
    engines,
    fuel_amount_tons: tonsOfFuel,
    reusable,
    thrust_sea_level: seaLevelThrust,
    thrust_vacuum: vacuumThrust,
  } = firstStage;

  return (
    <>
      <Flex flexDirection="column">
        <InfoItem dark label="engine burn time" info={burnTime} />
        <InfoItem dark label="engine count" info={engines} />
        <InfoItem dark label="fuel capacity" info={`${tonsOfFuel}t`} />
      </Flex>
      <Flex flexDirection="column">
        <InfoItem dark label="reusability" info={reusable ? "Yes" : "No"} />
        <InfoItem dark label="sea level thrust" info={seaLevelThrust.kN} />
        <InfoItem dark label="vacuum thrust" info={vacuumThrust.kN} />
      </Flex>
    </>
  );
};
