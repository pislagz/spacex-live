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

export const Launches = () => {
  const dispatch = useDispatch();
  const { status, launches } = useSelector(selectLaunches);
  const settings = useSelector(selectDashboardSetting);
  // const [itemsToShowCount, setItemsToShowCount] = useState(10);

  useEffect(() => {
    dispatch(fetchAllLaunches());
  }, [dispatch]);

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "failed" && <Error />}
      {status === "success" && (
        <Flex flexDirection="column" padding="80px 0">
          {launches.map(
            ({
              flight_number: flightNumber,
              name,
              date_utc: dateUTC,
              date_precision: datePrecision,
              success,
              rocket,
              launchpad,
              links,
              upcoming,
            }) => (
              <Tile key={flightNumber}>
                <InfoItem label="flight" info={flightNumber} />
                <InfoItem
                  isOnList
                  label={links?.patch?.small ? "mission patch" : "rocket logo"}
                  patchUrl={links?.patch?.small}
                  altPatch={rocket?.name}
                />
                {console.log(
                  showDate(dateUTC, datePrecision, settings.timezone)
                )}
                <InfoItem label="mission name" info={name} maxWidth="100px" />
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
                <InfoItem
                  label="status"
                  info={upcoming ? "Upcoming" : success ? "Success" : "Failure"}
                />
                <InfoItem label="rocket" info={rocket.name} />
                <InfoItem label="launchpad" info={launchpad.name} />
              </Tile>
            )
          )}
        </Flex>
      )}
    </>
  );
};
