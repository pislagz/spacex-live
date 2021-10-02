import React from "react";
import { Flex } from "app/components/common/ui";
import { Tile } from "app/components/common/Tile";
import { Col } from "./styled";
import { InfoItem } from "app/components/common/InfoItem";
import { Human } from "assets/icons/buttons/Human";
import { More } from "./More";

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
    <More details={details} />
  </Tile>
);
