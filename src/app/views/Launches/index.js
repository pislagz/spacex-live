import { Error } from "app/components/common/Error";
import { InfoItem } from "app/components/common/InfoItem";
import { Loading } from "app/components/common/Loading";
import { Flex } from "app/components/common/ui";
import { SETTINGS } from "app/constants/settings";
import { fetchAllLaunches } from "app/redux/actions/launches";
import { selectDashboardSetting, selectLaunches } from "app/redux/selectors";
import { showDate, showOffset } from "app/utils/parseDate";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tile } from "./components/Tile";
import styled from "styled-components";
import { colorizeMissionStatus } from "app/utils/colorizeStatus";
import { getMissionStatus } from "app/utils/getStatus";
import { openModal } from "app/redux/slices/modalSlice";
import { LaunchesModal } from "./components/LaunchesModal";
import { fetchWeatherData } from "app/redux/actions/weather";
import { animationProps } from "app/styles/animations";

const Wrapper = styled(Flex)`
  &:hover {
    article {
      opacity: 0.3;
    }

    .tileWrapper {
      &:hover > article {
        opacity: 1;
      }
    }

    article {
      cursor: pointer;
      transition: all 0.1s ease-out;
      &:hover {
        transform: scale(1.02);
      }
      &:active {
        transform: scale(0.99);
      }
    }
  }
`;

export const Launches = () => {
  const dispatch = useDispatch();
  const { status, launches } = useSelector(selectLaunches);
  const settings = useSelector(selectDashboardSetting);

  useEffect(() => {
    dispatch(fetchAllLaunches());
    dispatch(fetchWeatherData());
  }, [dispatch]);

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "failed" && <Error />}
      {status === "success" && (
        <Flex padding="80px 0" width="90%">
          <Wrapper width="100%">
            <Flex width="100%" flexDirection="column" {...animationProps}>
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
                ) => (
                  <Flex py="sm" className="tileWrapper" key={flightNumber}>
                    <Tile
                      width="100%"
                      flexWrap={{ _: "wrap", sm: "nowrap" }}
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
                      <InfoItem
                        width={{ _: "50%", sm: "auto" }}
                        isOnList
                        label={
                          links?.patch?.small ? "mission patch" : "rocket logo"
                        }
                        patchUrl={links?.patch?.small}
                        altPatch={rocket?.name}
                      />

                      <Flex
                        flexDirection="column"
                        width={{ _: "50%", sm: "auto" }}
                      >
                        <InfoItem label="flight" info={flightNumber} />
                        <InfoItem
                          label="mission name"
                          info={name}
                          maxWidth="100px"
                        />
                      </Flex>
                      <Flex
                        flexDirection="column"
                        width={{ _: "50%", sm: "auto" }}
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
                        <Flex>
                          <InfoItem
                            p="xxs"
                            label={`TIME ${
                              settings.timezone ===
                              SETTINGS.dashboard.timezone.utc
                                ? "(UTC)"
                                : settings.timezone ===
                                    SETTINGS.dashboard.timezone.local &&
                                  `(${showOffset(dateUTC, settings.timezone)})`
                            }`}
                            info={showDate(
                              dateUTC,
                              datePrecision,
                              settings.timezone
                            )}
                          />
                        </Flex>
                      </Flex>
                      <Flex
                        flexDirection="column"
                        width={{ _: "50%", sm: "auto" }}
                      >
                        <InfoItem label="launchpad" info={launchpad.name} />
                        <InfoItem label="rocket" info={rocket.name} />
                      </Flex>
                    </Tile>
                  </Flex>
                )
              )}
            </Flex>
          </Wrapper>
        </Flex>
      )}
      <LaunchesModal />
    </>
  );
};
