import React, { useState } from "react";
import { InfoItem } from "app/components/common/InfoItem";
import { Col } from "../../styled";
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

  return (
    <>
      <Col marginRight="md">
        <InfoItem dark label="engine burn time" info={burnTime || "Unknown"} />
        <InfoItem dark label="engine count" info={engines} />
        <InfoItem dark label="fuel capacity" info={`${tonsOfFuel}t`} />
      </Col>
      <Col marginRight="md">
        <InfoItem dark label="reusable" info={reusable ? "Yes" : "No"} />
        <InfoItem dark label="thrust" info={thrust.kN} />
        <InfoItem
          dark
          label="max payload"
          info={addSeparators(payloadWeights?.[0].kg + "kg")}
        />
      </Col>
      <Flex
        p="1rem"
        flexDirection="column"
        width="300px"
        borderRadius="lg"
        bg={colors.gray.light}
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
    </>
  );
};
