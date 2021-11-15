import React from "react";
import { Flex } from "app/components/common/ui";
import { InfoItem } from "app/components/common/InfoItem";
import { addSeparators } from "app/utils/textFormatting";

export const General = ({ data }) => {
  const {
    name,
    active,
    launchCost,
    firstFlight,
    country,
    stages,
    boosters,
    company,
    // wikipedia,
  } = data;

  return (
    <>
      <Flex flexDirection="column">
        <InfoItem dark label="name" info={name} />
        <InfoItem
          dark
          label="status"
          info={
            active
              ? "Active"
              : name === "Starship"
              ? "In development"
              : "Inactive"
          }
        />
        <InfoItem
          dark
          label="cost per launch"
          info={`$ ${addSeparators(launchCost)}`}
        />
        <InfoItem dark label="first flight date" info={firstFlight} />
      </Flex>
      <Flex flexDirection="column">
        <InfoItem dark label="country" info={country} />
        <InfoItem dark label="stages count" info={stages} />
        <InfoItem
          dark
          label="side boosters"
          info={boosters ? boosters : "None"}
        />
        <InfoItem dark label="company" info={company} />
      </Flex>
    </>
  );
};
