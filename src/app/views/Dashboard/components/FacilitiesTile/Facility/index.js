import React from "react";
import { InfoItem } from "app/components/common/InfoItem";
import { Wrapper, Row, Col, Padder } from "./styled";
import { weatherUtils } from "app/utils/weatherUtils";

export const Facility = ({ image, data, name, label, region }) => (
  <Wrapper image={image}>
    <Padder p="0.5rem">
      <Row justifyContent="space-between">
        <Col>
          <InfoItem
            flexDirection="column-reverse"
            label={label}
            info={name}
            noUpper
          />
        </Col>
        <Col>
          <InfoItem alignItems="flex-end" label="region" info={region} />
        </Col>
      </Row>
      <Row justifyContent="space-between">
        <InfoItem
          label="temp"
          info={weatherUtils.convertKelvin(data?.main?.temp, "c")}
        />
        <InfoItem label="weather" info={data?.weather[0]?.main} />
        <InfoItem
          alignItems="flex-end"
          label="wind"
          info={weatherUtils.displayWindSpeed(data?.wind?.speed, "m/s")}
        />
      </Row>
    </Padder>
  </Wrapper>
);
