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
import { openModal } from "app/redux/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { showDate, showOffset } from "app/utils/parseDate";
import { SETTINGS } from "app/constants/settings";
import { iconsConfig } from "./config";
import { DateTime } from "luxon";

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
  detailsList,
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
            ? DateTime.fromISO(dateUTC).hasSame(DateTime.local(), "day")
              ? "Current launch"
              : "Upcoming launch"
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
              info={showDate(dateUTC, datePrecision, settings.timezone)}
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
            detailsLineHeight="22px"
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
            {detailsList.map(({ icon: Icon, label, isAvailable }) => {
              return (
                isAvailable && (
                  <IconButton
                    onClick={() =>
                      dispatch(
                        openModal({
                          type: `${label}`,
                          launch: launch,
                          item: null,
                        })
                      )
                    }
                    icon={iconsConfig[label]}
                    label={label}
                    key={`${label}ButtonMapKey`}
                  />
                )
              );
            })}
          </ul>
        </Dropdown>
      </Tile>
    </>
  );
};
