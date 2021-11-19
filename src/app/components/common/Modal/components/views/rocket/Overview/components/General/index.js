import React from "react";
import { InfoItem } from "app/components/common/InfoItem";
import { formatBigNumber, addSeparators } from "app/utils/textFormatting";
import { DateTime } from "luxon";
// import { Col } from "../../styled";
import { Flex } from "app/components/common/ui";

export const General = ({ data }) => {
  const {
    name,
    active,
    launchCost,
    firstFlight,
    country,
    stages,
    boosters,
    height,
    mass,
    // wikipedia,
  } = data;

  const content = [
    { label: "name", info: name },
    { label: "height", info: height.meters + "m" },
    { label: "mass", info: addSeparators(mass.kg) + "kg" },
    {
      label: "status",
      info: active
        ? "Active"
        : name === "Starship"
        ? "In development"
        : "Retired",
    },
    { label: "launch cost", info: `$${formatBigNumber(launchCost, 2)}` },
    {
      label: "first flight",
      info: DateTime.fromISO(firstFlight).toFormat("DD"),
    },
    { label: "country", info: country },
    { label: "stages", info: stages },
    { label: "side boosters", info: boosters ? boosters : "None" },
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
