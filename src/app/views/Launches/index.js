import { Error } from "app/components/common/Error";
import { InfoItem } from "app/components/common/InfoItem";
import { Loading } from "app/components/common/Loading";
import { Flex } from "app/components/common/ui";
import { SETTINGS } from "app/constants/settings";
import { fetchAllLaunches } from "app/redux/actions/launches";
import { selectDashboardSetting, selectLaunches } from "app/redux/selectors";
import { showDate, showOffset } from "app/utils/parseDate";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tile } from "./components/Tile";
import styled from "styled-components";
import { Wrapper as TileWrapper } from "./components/Tile/styled";

const Wrapper = styled(Flex)`
  /* article {
    cursor: pointer;
    transition: 0.3s all ease-out;
    opacity: 1;

    &:hover {
      transform: scale(1.02);

      ${TileWrapper}:not(:hover) {
        opacity: 0.3;
      }
    }
  } */

  article {
    cursor: pointer;
    transition: 0.3s all ease-out;

    /* &:hover + :not(:hover) {
      opacity: 0.3;
    } */
  }

  &:hover > article {
    opacity: 0.2;
  }

  & > article:hover {
    opacity: 1;
  }
`;

export const Launches = () => {
  const dispatch = useDispatch();
  const { status, launches } = useSelector(selectLaunches);
  const settings = useSelector(selectDashboardSetting);

  // const [itemsToShowCount, setItemsToShowCount] = useState(10);

  useEffect(() => {
    dispatch(fetchAllLaunches());
  }, [dispatch]);

  const [current, setCurrent] = useState(null);

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "failed" && <Error />}
      {status === "success" && (
        <Flex padding="80px 0" width="90%">
          <Wrapper width="100%" flexDirection="column">
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
                <Tile
                  onMouseEnter={() => setCurrent(index)}
                  // onMouseLeave={() => setCurrent(null)}
                  style={{
                    opacity: current === index || current == null ? "1" : "0.8",
                  }}
                  key={flightNumber}
                  width="100%"
                  flexWrap={{ _: "wrap", md: "nowrap" }}>
                  <InfoItem
                    width={{ _: "50%", sm: "auto" }}
                    isOnList
                    label={
                      links?.patch?.small ? "mission patch" : "rocket logo"
                    }
                    patchUrl={links?.patch?.small}
                    altPatch={rocket?.name}
                  />
                  {console.log(
                    showDate(dateUTC, datePrecision, settings.timezone)
                  )}

                  <Flex flexDirection="column" width={{ _: "50%", sm: "auto" }}>
                    <InfoItem label="flight" info={flightNumber} />
                    <InfoItem
                      label="mission name"
                      info={name}
                      maxWidth="100px"
                    />
                  </Flex>
                  <Flex flexDirection="column" width={{ _: "50%", sm: "auto" }}>
                    <InfoItem
                      label="status"
                      info={
                        upcoming ? "Upcoming" : success ? "Success" : "Failure"
                      }
                    />
                    <InfoItem
                      label={`TIME ${
                        settings.timezone === SETTINGS.dashboard.timezone.utc
                          ? "(UTC)"
                          : settings.timezone ===
                              SETTINGS.dashboard.timezone.local &&
                            `(${showOffset(dateUTC, settings.timezone)})`
                      }`}
                      info={showDate(dateUTC, datePrecision, settings.timezone)}
                    />
                  </Flex>
                  <Flex flexDirection="column" width={{ _: "50%", sm: "auto" }}>
                    <InfoItem label="launchpad" info={launchpad.name} />
                    <InfoItem label="rocket" info={rocket.name} />
                  </Flex>
                </Tile>
              )
            )}
          </Wrapper>
        </Flex>
      )}
    </>
  );
};
