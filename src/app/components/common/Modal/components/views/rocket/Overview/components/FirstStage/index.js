import React from "react";
import { InfoItem } from "app/components/common/InfoItem";
import { Flex } from "app/components/common/ui";

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

  const content = [
    { label: "engine burn time", info: burnTime + " seconds" || "Unknown" },
    { label: "engine count", info: engines },
    { label: "fuel capacity", info: `${tonsOfFuel} tons` },
    { label: "reusable", info: reusable ? "Yes" : "No" },
    { label: "sea level thrust", info: seaLevelThrust.kN + " kN" },
    { label: "vacuum thrust", info: vacuumThrust.kN + " kN" },
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
