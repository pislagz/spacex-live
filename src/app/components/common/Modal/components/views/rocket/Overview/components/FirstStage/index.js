import React from "react";
import { InfoItem } from "app/components/common/InfoItem";
import { Col } from "../../styled";

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
      <Col marginRight="md">
        <InfoItem dark label="engine burn time" info={burnTime || "Unknown"} />
        <InfoItem dark label="engine count" info={engines} />
        <InfoItem dark label="fuel capacity" info={`${tonsOfFuel}t`} />
      </Col>
      <Col>
        <InfoItem dark label="reusable" info={reusable ? "Yes" : "No"} />
        <InfoItem dark label="sea level thrust" info={seaLevelThrust.kN} />
        <InfoItem dark label="vacuum thrust" info={vacuumThrust.kN} />
      </Col>
    </>
  );
};
