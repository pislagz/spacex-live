import React, { useState } from "react";
import { InfoItem } from "app/components/common/InfoItem";
import { addSeparators } from "app/utils/textFormatting";
import { Flex } from "app/components/common/ui";
import { Switcher } from "app/components/common/Switcher";
import { colors } from "app/styles/theme/colors";

export const SecondStage = ({ data }) => {
  const { secondStageData, payloadWeights } = data;
  const {
    burn_time_sec: burnTime,
    engines,
    fuel_amount_tons: tonsOfFuel,
    reusable,
    thrust,
  } = secondStageData;
  const orbitsList = payloadWeights.map(({ id }) => id.toUpperCase());
  const [currentOrbit, setCurrentOrbit] = useState(orbitsList[0]);
  const currentMaxPayload = payloadWeights.filter(
    ({ id }) => id.toUpperCase() === currentOrbit
  )[0];

  const content = [
    { label: "engine burn time", info: burnTime + " seconds" || "Unknown" },
    { label: "engine count", info: engines },
    { label: "fuel capacity", info: `${tonsOfFuel} tons` },
    { label: "reusable", info: reusable ? "Yes" : "No" },
    { label: "thrust", info: thrust.kN + " kN" },
    {
      label: "max payload",
      info: addSeparators(payloadWeights?.[0].kg + "kg"),
    },
  ];

  return (
    <Flex flexDirection={{ _: "column", lg: "row" }}>
      <Flex flexWrap="wrap">
        {content.map(({ label, info }) => (
          <Flex
            key={label}
            width={{ _: "100px", sm: "120px", md: "130px" }}
            m="xs"
          >
            <InfoItem dark label={label} info={info} />
          </Flex>
        ))}
      </Flex>
      <Flex
        p="1rem"
        flexDirection="column"
        width={{ _: "unset", md: "600px" }}
        borderRadius="lg"
        bg={colors.gray.light}
        maxWidth="250px"
      >
        <InfoItem alignItems="center" dark label="max payloads" />
        <Switcher
          options={orbitsList}
          activeOption={orbitsList.indexOf(currentOrbit)}
          handleClick={setCurrentOrbit}
        />
        <Flex height="100%" justifyContent="center" alignItems="center">
          <InfoItem
            alignItems="center"
            dark
            label={currentMaxPayload.name}
            info={currentMaxPayload.kg + " kg"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
