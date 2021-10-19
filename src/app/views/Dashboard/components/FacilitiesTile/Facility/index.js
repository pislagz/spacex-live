import React from "react";
import { InfoItem } from "app/components/common/InfoItem";
import { Wrapper, Row, Col, Padder } from "./styled";
import { weatherUtils } from "app/utils/weatherUtils";
import { selectUnit } from "app/redux/selectors";
import { useSelector } from "react-redux";

export const Facility = ({ image, data, name, label, region, ...props }) => {
  const units = useSelector(selectUnit);

  return (
    <Wrapper image={image} {...props}>
      <Padder p="0.5rem 1rem">
        <Row justifyContent="space-between">
          <Col>
            <InfoItem
              flexDirection="column-reverse"
              label={label}
              info={name}
              noUpper
              m="0"
            />
          </Col>
          <Col>
            <InfoItem alignItems="flex-end" label="region" info={region} />
          </Col>
        </Row>
        <Row justifyContent="space-between">
          <InfoItem
            label="temp"
            info={weatherUtils.convertKelvin(data?.main?.temp, units.temp)}
            m="0"
          />
          <InfoItem label="weather" info={data?.weather[0]?.main} m="0" />
          <InfoItem
            alignItems="flex-end"
            label="wind"
            info={weatherUtils.displayWindSpeed(
              data?.wind?.speed,
              units.windspeed
            )}
            m="0"
          />
        </Row>
      </Padder>
    </Wrapper>
  );
};
