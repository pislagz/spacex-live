import { Error } from "app/components/common/Error";
import { InfoItem } from "app/components/common/InfoItem";
import { Loading } from "app/components/common/Loading";
import { Flex } from "app/components/common/ui";
import { SETTINGS } from "app/constants/settings";
import { fetchAllLaunches } from "app/redux/actions/launches";
import {
  selectDashboardSetting,
  selectLaunches,
  selectWeather,
} from "app/redux/selectors";
import { showDate, showOffset } from "app/utils/parseDate";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tile } from "./components/Tile";
import styled from "styled-components";
import { colorizeMissionStatus } from "app/utils/colorizeStatus";
import { getMissionStatus } from "app/utils/getStatus";
import { openModal } from "app/redux/slices/modalSlice";
import { LaunchesModal } from "./components/LaunchesModal";
import { fetchWeatherData } from "app/redux/actions/weather";
import { animationProps } from "app/styles/animations";
import { More } from "./styled";
import { setRoute } from "app/redux/slices/routeSlice";

const Wrapper = styled(Flex)`
  &:hover {
    .tileWrapper {
      &:not(:hover) {
        article {
          opacity: 0.3;
        }
      }
    }
  }

  article {
    cursor: pointer;
    transition: all 0.1s ease-out;
    &:hover {
      opacity: 1;
      transform: scale(1.02);
    }
    &:active {
      transform: scale(0.99);
    }
  }
`;

export const Launches = () => {
  const dispatch = useDispatch();
  const { status, launches } = useSelector(selectLaunches);
  const settings = useSelector(selectDashboardSetting);
  const weather = useSelector(selectWeather);
  const [displayCount, setDisplayCount] = useState(15);

  useEffect(() => {
    dispatch(setRoute({ route: "Launches" }));

    if (!launches.length) {
      dispatch(fetchAllLaunches());
    }
    if (!Object.keys(weather.weather).length) {
      dispatch(fetchWeatherData());
    }
  }, [dispatch, launches.length, weather]);

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "failed" && <Error />}
      {status === "success" && (
        <>
          <Flex
            paddingTop={{ _: "none", md: "80px" }}
            marginBottom="25px"
            width="90%"
            flexDirection="column"
          >
            <Wrapper width="100%">
              <Flex width="100%" flexDirection="column">
                {launches.map(
                  (
                    {
                      flight_number: flightNumber,
                      name,
                      date_utc: dateUTC,
                      date_precision: datePrecision,
                      success,
                      rocket,
                      launchpad,
                      links,
                      upcoming,
                    },
                    index
                  ) => {
                    return index <= displayCount ? (
                      <Flex
                        py="sm"
                        className="tileWrapper"
                        key={flightNumber}
                        {...animationProps}
                      >
                        <Tile
                          flexDirection={{ _: "column", sm: "row" }}
                          width="100%"
                          m={0}
                          onClick={() => {
                            dispatch(
                              openModal({
                                launch: flightNumber,
                                type: "rocket",
                                item: null,
                              })
                            );
                          }}
                        >
                          <Flex width="100%">
                            <InfoItem
                              flex="auto"
                              isOnList
                              label={
                                links?.patch?.small
                                  ? "mission patch"
                                  : "rocket logo"
                              }
                              patchUrl={links?.patch?.small}
                              altPatch={rocket?.name}
                            />

                            <Flex
                              flex="auto"
                              flexDirection="column"
                              justifyContent={{ _: "unset", sm: "center" }}
                            >
                              <InfoItem label="flight" info={flightNumber} />
                              <InfoItem label="mission name" info={name} />
                            </Flex>
                          </Flex>
                          <Flex width="100%">
                            <Flex
                              flex="auto"
                              flexDirection="column"
                              justifyContent={{ _: "unset", sm: "center" }}
                            >
                              <Flex>
                                <InfoItem
                                  p="xxs"
                                  label="status"
                                  borderRadius="sm"
                                  bg={colorizeMissionStatus(
                                    getMissionStatus(success, upcoming)
                                  )}
                                  info={getMissionStatus(success, upcoming)}
                                />
                              </Flex>
                              <Flex
                                width="100%"
                                maxWidth={{ _: "121px", sm: "unset" }}
                              >
                                <InfoItem
                                  p="xxs"
                                  label={`TIME ${
                                    settings.timezone ===
                                    SETTINGS.dashboard.timezone.utc
                                      ? "(UTC)"
                                      : settings.timezone ===
                                          SETTINGS.dashboard.timezone.local &&
                                        `(${showOffset(
                                          dateUTC,
                                          settings.timezone
                                        )})`
                                  }`}
                                  info={showDate(
                                    dateUTC,
                                    datePrecision,
                                    settings.timezone,
                                    true
                                  )}
                                />
                              </Flex>
                            </Flex>
                            <Flex
                              flex="auto"
                              flexDirection="column"
                              justifyContent={{ _: "unset", sm: "center" }}
                            >
                              <InfoItem
                                label="launchpad"
                                info={launchpad.name}
                              />
                              <InfoItem label="rocket" info={rocket.name} />
                            </Flex>
                          </Flex>
                        </Tile>
                      </Flex>
                    ) : null;
                  }
                )}
              </Flex>
            </Wrapper>
          </Flex>
          {displayCount < launches.length ? (
            <More
              marginTop="25px"
              marginBottom="100px"
              onClick={() => {
                setDisplayCount(displayCount + 20);
              }}
            >
              View more
            </More>
          ) : null}
        </>
      )}

      <LaunchesModal />
    </>
  );
};
