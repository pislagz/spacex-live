import React from "react";
import { Flex } from "app/components/common/ui";
import { Tile } from "app/components/common/Tile";
import { Col } from "./styled";
import { InfoItem } from "app/components/common/InfoItem";
import { Human } from "assets/icons/buttons/Human";
import { Dropdown } from "app/components/common/Dropdown";
import { IconButton } from "app/components/common/IconButton";
import { motion } from "framer-motion";
import { selectDashboardSetting } from "app/redux/selectors";
import { openModal } from "app/redux/reducers/modalReducer";
import { useDispatch, useSelector } from "react-redux";
import { CONFIG } from "app/views/Dashboard/components/LaunchTile/config";
import { showDate, dateFormats, showOffset } from "app/utils/parseDate";
import { SETTINGS } from "app/constants/settings";

export const LaunchTile = ({
  launch,
  name: missionName,
  flight_number: flightNo,
  date_utc: dateUTC,
  date_precision: datePrecision,
  links,
  rocket,
  crew,
  launchpad,
  details,
  availableDetails,
}) => {
  const settings = useSelector(selectDashboardSetting);
  const dispatch = useDispatch();

  return (
    <>
      <Tile
        as={motion.div}
        layout
        title={
          launch === "next"
            ? "Upcoming launch"
            : launch === "prev"
            ? "Previous launch"
            : "Rocket launch"
        }
      >
        <Flex width={"100%"} flexDirection="row">
          <Col>
            <InfoItem label="mission name" info={missionName} />
            <InfoItem label="rocket" info={rocket?.name} />
            <InfoItem label="flight number" info={flightNo} />
            <InfoItem
              noUpper
              label={`TIME ${
                settings.timezone === SETTINGS.dashboard.timezone.utc
                  ? "(UTC)"
                  : settings.timezone === SETTINGS.dashboard.timezone.local &&
                    `(${showOffset(dateUTC, settings.timezone)})`
              }`}
              info={showDate(
                dateUTC,
                dateFormats[datePrecision],
                settings.timezone
              )}
            />
            <InfoItem
              label="links"
              links={{
                wikipedia: links?.wikipedia,
                youtube: links?.webcast,
                reddit: links?.reddit?.campaign,
              }}
            />
          </Col>
          <Col>
            <InfoItem
              label={links?.patch?.small ? "mission patch" : "rocket logo"}
              patchUrl={links?.patch?.small}
              altPatch={rocket?.name}
            />

            {crew?.length ? (
              <InfoItem
                label="crew"
                info={crew?.map((person) => (
                  <Human key={person.crew.name} />
                ))}
              />
            ) : null}

            {!crew?.length && (
              <InfoItem label="launchpad" info={launchpad?.name} />
            )}
          </Col>
        </Flex>
        <Dropdown string="more">
          <InfoItem
            label="details"
            fontSize="10px"
            details={
              details
                ? details
                : "No descriptive details have been provided for this mission."
            }
          />
          <ul
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {CONFIG.details
              .filter((button) => availableDetails.includes(button.label))
              .map(({ icon: Icon, label }) => {
                return (
                  <IconButton
                    onClick={() =>
                      dispatch(openModal({ type: `${label}`, launch: launch }))
                    }
                    icon={<Icon />}
                    label={label}
                    key={`${label}ButtonMapKey`}
                  />
                );
              })}
          </ul>
        </Dropdown>
      </Tile>
    </>
  );
};
