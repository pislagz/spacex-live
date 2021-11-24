import React from "react";
import * as S from "../styled";
import { Flex } from "app/components/common/ui";
import { useSelector } from "react-redux";
import { selectDashboardSetting, selectWeather } from "app/redux/selectors";
import { Maps } from "assets/icons/buttons/Maps";
import { DateTime } from "luxon";
import { showOffset } from "app/utils/parseDate";
import { weatherUtils } from "app/utils/weatherUtils";
import { InfoItem } from "app/components/common/InfoItem";
import { animationProps } from "app/styles/animations";

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
  const { weather } = useSelector(selectWeather);
  const { convertKelvin, displayWindSpeed } = weatherUtils;
  const localWeather = () =>
    locality === "Cape Canaveral"
      ? "canaveral"
      : locality === "Vandenberg Space Force Base"
      ? "vandenberg"
      : locality === "Boca Chica Village"
      ? "starbase"
      : null;

  return (
    <S.Wrapper
      justifyContent={{ _: "flex-start", lg: "center" }}
      alignItems="center"
      flexDirection={{ _: "column", lg: "row" }}
      {...animationProps}
    >
      {console.log(launchpad)}

      <S.Card position="relative">
        <Flex flexDirection="column">
          <InfoItem dark label="launchpad" marginBottom="1rem" />
          <Flex>
            <S.PhotoWrapper src={images.large[0]}>
              <InfoItem
                marginTop="auto"
                color="white"
                label="name"
                info={fullName}
                marginBottom="1rem"
              />
            </S.PhotoWrapper>
          </Flex>
          <Flex marginTop="1rem" height="100%">
            <S.Col marginRight="sm">
              <InfoItem
                dark
                label={`TIME (${showOffset(DateTime.now(), timezone)})`}
                info={DateTime.now({ zone: timezone }).toFormat(
                  "LLL dd hh':'mm a"
                )}
              />

              <InfoItem
                dark
                label="weather"
                info={`${
                  weather[localWeather()].weather[0].main
                }, ${convertKelvin(
                  weather[localWeather()].main.temp,
                  tempUnit
                )}`}
              />
            </S.Col>
            <S.Col marginRight="sm">
              <InfoItem
                dark
                label="launches"
                info={`${launchAttempts} ${
                  launchFailures ? `(incl. ${launchFailures} failed)` : ""
                }`}
              />

              <InfoItem
                dark
                label="wind"
                info={displayWindSpeed(
                  weather[localWeather()].wind.speed,
                  windUnit
                )}
              />
            </S.Col>
            <S.Col>
              <InfoItem dark label="location" info={locality} />
              <InfoItem dark label="region" info={region} />
            </S.Col>
          </Flex>
        </Flex>
        <Flex position="absolute" right="20px" bottom="20px">
          <Maps lat={lat} lon={lon} />
        </Flex>
      </S.Card>
      <Flex
        flexDirection="column"
        marginLeft={{ _: "unset", lg: "2rem" }}
        marginTop={{ _: "2rem", lg: "unset" }}
        width={{ _: "100%", sm: "90%", md: "80%" }}
      >
        <InfoItem
          dark
          label="description"
          details={details}
          detailsLineHeight="28px"
        />
      </Flex>
    </S.Wrapper>
  );
};
