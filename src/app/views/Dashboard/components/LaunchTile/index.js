import React from "react";
import { Flex } from "app/components/common/ui";
import { Tile } from "app/components/common/Tile";
import { Col } from "./styled";
import { InfoItem } from "app/components/common/InfoItem";
import { Human } from "assets/icons/buttons/Human";
import { Dropdown } from "app/components/common/Dropdown";
import { IconButton } from "app/components/common/IconButton";
import { Payload } from "assets/icons/buttons/Payload";
import { Crew } from "assets/icons/buttons/Crew";
import { Customers } from "assets/icons/buttons/Customers";
import { Launchpad } from "assets/icons/buttons/Launchpad";
import { Landpad } from "assets/icons/buttons/Landpad";
import { Rocket } from "assets/icons/buttons/Rocket";
import { motion } from "framer-motion";

export const LaunchTile = ({
  launch,
  name: missionName,
  flight_number: flightNo,
  date_utc: dateUTC,
  links,
  rocket,
  crew,
  payloads,
  launchpad,
  details,
}) => (
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
    <Flex mt="1rem" width={"100%"} flexDirection="row">
      <Col>
        <InfoItem label="mission name" info={missionName} />
        <InfoItem label="rocket" info={rocket?.name} />
        <InfoItem label="flight number" info={flightNo} />
        <InfoItem label="time" info={String(dateUTC).slice(0, 10)} />
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

        {!crew?.length && <InfoItem label="launchpad" info={launchpad?.name} />}
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
        <IconButton icon={<Rocket />} label={"rocket"} />
        <IconButton icon={<Payload />} label={"payload"} />
        <IconButton icon={<Crew />} label={"crew"} />
        <IconButton icon={<Customers />} label={"customers"} />
        <IconButton icon={<Launchpad />} label={"launchpad"} />
        <IconButton icon={<Landpad />} label={"landpad"} />
      </ul>
    </Dropdown>
  </Tile>
);
