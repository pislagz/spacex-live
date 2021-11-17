import React from "react";
import { InfoItem } from "app/components/common/InfoItem";
import { formatBigNumber, addSeparators } from "app/utils/textFormatting";
import { DateTime } from "luxon";
import { Col } from "../../styled";

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

  return (
    <>
      <Col marginRight="md">
        <InfoItem dark label="name" info={name} />
        <InfoItem dark label="height" info={height.meters + "m"} />
        <InfoItem dark label="mass" info={addSeparators(mass.kg) + "kg"} />
      </Col>
      <Col marginRight="md">
        <InfoItem
          dark
          label="status"
          info={
            active
              ? "Active"
              : name === "Starship"
              ? "In development"
              : "Retired"
          }
        />
        <InfoItem
          dark
          label="launch cost"
          info={`$${formatBigNumber(launchCost, 2)}`}
        />
        <InfoItem
          dark
          label="first flight"
          info={DateTime.fromISO(firstFlight).toFormat("DD")}
        />
      </Col>
      <Col>
        <InfoItem dark label="country" info={country} />
        <InfoItem dark label="stages" info={stages} />
        <InfoItem
          dark
          label="side boosters"
          info={boosters ? boosters : "None"}
        />
      </Col>
    </>
  );
};
