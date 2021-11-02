import React from "react";
import { S } from "./styled";
import { InfoItem } from "app/components/common/InfoItem";
import { colors } from "app/styles/theme/colors";
import { Flex, Image } from "app/components/common/ui";
import { DateTime } from "luxon";
import { showOffset } from "app/utils/parseDate";
import { useSelector } from "react-redux";
import { selectDashboard, selectDashboardSetting } from "app/redux/selectors";
import { weatherUtils } from "app/utils/weatherUtils";
import { Maps } from "assets/icons/buttons/Maps";

export const Launchpad = ({ launchpad }) => {
  const {
    full_name: fullName,
    images,
    details,
    latitude: lat,
    longitude: lon,
    launch_attempts: launchAttempts,
    launch_successes: launchSuccesses,
    locality,
    region,
    timezone,
  } = launchpad;

  const launchFailures = launchAttempts - launchSuccesses;
  const { temp: tempUnit, windspeed: windUnit } = useSelector(
    selectDashboardSetting
  );
  const { weather } = useSelector(selectDashboard);
  const { convertKelvin, displayWindSpeed } = weatherUtils;
  const localWeather = () =>
    locality === "Cape Canaveral"
      ? weather.canaveral
      : locality === "Vandenberg Space Force Base"
      ? weather.vandenberg
      : locality === "Boca Chica Village"
      ? weather.starbase
      : null;

  return (
    <S.Wrapper flexDirection={{ _: "column", lg: "row" }}>
      {console.log(weather)}
      {console.log(launchpad)}

      <S.Card>
        <InfoItem
          labelColor={colors.black.medium}
          label="name"
          info={fullName}
        />
        <Image src={images.large[0]} />
        <S.Details>
          <S.Col>
            <Flex>
              <InfoItem
                labelColor={colors.black.medium}
                label="location"
                info={locality}
              />
              <Maps lat={lat} lon={lon} />
            </Flex>
            <InfoItem
              labelColor={colors.black.medium}
              label="region"
              info={region}
            />
            <InfoItem
              labelColor={colors.black.medium}
              label="spacex launches"
              info={`${launchAttempts} ${
                launchFailures ? `(incl. ${launchFailures} failed)` : ""
              }`}
            />
          </S.Col>
          <S.Col>
            <InfoItem
              labelColor={colors.black.medium}
              label={`TIME (${showOffset(DateTime.now(), timezone)})`}
              info={DateTime.now({ zone: timezone }).toFormat(
                "LLL dd hh':'mm a"
              )}
            />
            <InfoItem
              labelColor={colors.black.medium}
              label="weather"
              info={`${localWeather().weather[0].main}, ${convertKelvin(
                localWeather().main.temp,
                tempUnit
              )}`}
            />
            <InfoItem
              labelColor={colors.black.medium}
              label="wind"
              info={displayWindSpeed(localWeather().wind.speed, windUnit)}
            />
          </S.Col>
        </S.Details>
      </S.Card>
      <S.Description>{details}</S.Description>
    </S.Wrapper>
  );
};
