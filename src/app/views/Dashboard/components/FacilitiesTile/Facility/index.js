import React from "react";
import { InfoItem } from "app/components/common/InfoItem";
import { Wrapper, Row, Col } from "./styled";
import { weatherUtils } from "app/utils/weatherUtils";
import { selectDashboardSetting } from "app/redux/selectors";
import { useSelector } from "react-redux";

export const Facility = ({ image, data, name, label, region, ...props }) => {
  const settings = useSelector(selectDashboardSetting);

  return (
    <Wrapper image={image} {...props}>
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
          info={weatherUtils.convertKelvin(data?.main?.temp, settings.temp)}
          m="0"
          width="30%;"
        />
        <InfoItem
          alignItems="center"
          label="weather"
          info={data?.weather[0]?.main}
          m="0"
          width="30%;"
        />
        <InfoItem
          alignItems="flex-end"
          label="wind"
          info={weatherUtils.displayWindSpeed(
            data?.wind?.speed,
            settings.windspeed
          )}
          m="0"
          width="30%;"
        />
      </Row>
    </Wrapper>
  );
};
