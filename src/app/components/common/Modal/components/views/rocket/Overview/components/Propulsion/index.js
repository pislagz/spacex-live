import React from "react";
import { InfoItem } from "app/components/common/InfoItem";
import {
  firstToUpperCase,
  everyFirstToUpperCase,
} from "app/utils/textFormatting";
import { Col } from "../../styled";
import { Flex } from "app/components/common/ui";

export const Propulsion = ({ data }) => {
  const { engines } = data;
  const {
    engine_loss_max: maxEngineLoss,
    isp,
    // layout,
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
    <Flex flexDirection={{ _: "column", sm: "row" }}>
      <Flex>
        <Col marginRight={{ _: "sm", smd: "md" }}>
          <InfoItem
            dark
            label="engine type"
            info={firstToUpperCase(`${type} ${version}`)}
          />
          <InfoItem dark label="engine count" info={number} />
          <InfoItem dark label="TWR" info={TWR} />
        </Col>

        <Col marginRight={{ _: "sm", md: "md" }}>
          <InfoItem dark label="sea level thrust" info={seaLevelThrust.kN} />
          <InfoItem dark label="vacuum thrust" info={vacuumThrust.kN} />
          <InfoItem
            dark
            label="isp (sea/vacuum)"
            info={`${isp.sea_level}/${isp.vacuum}`}
          />
        </Col>
      </Flex>
      <Col>
        <InfoItem
          dark
          label="propellant #1"
          info={everyFirstToUpperCase(propellant1)}
        />
        <InfoItem
          dark
          label="propellant #2"
          info={everyFirstToUpperCase(propellant2)}
        />
        <InfoItem
          dark
          label="max engine loss"
          info={maxEngineLoss !== null ? maxEngineLoss : "Unknown"}
        />
      </Col>
    </Flex>
  );
};
