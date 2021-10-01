import { Flex } from "app/components/common/ui";
import { InfoItem } from "./InfoItem";
import { More } from "./More";
import React from "react";
import { Wrapper, MainTitle, Col } from "./styled";
import { Human } from "assets/icons/buttons/Human";

export const InfoTile = ({
  type,
  title,
  name: missionName,
  flight_number: flightNo,
  date_utc: dateUTC,
  links,
  rocket,
  crew,
  payloads,
  launchpad,
  details,
}) => {
  return (
    <Wrapper
      m={{ _: "0.5rem", md: "1rem" }}
      p={{ _: "1.5rem", md: "2rem" }}
      width={{ _: "300px", sm: "352px" }}>
      <Flex flexDirection="column" width="100%">
        <MainTitle fontSize={{ _: "md", lg: "lg" }}>{title}</MainTitle>
        {type === "launch" && (
          <>
            <Flex mt="1rem" width={"100%"} flexDirection="row">
              <Col mr="2rem">
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

                {!crew?.length ? (
                  <>
                    <InfoItem label="launchpad" info={launchpad?.name} />
                  </>
                ) : null}
              </Col>
            </Flex>
            <More details={details} />
          </>
        )}
      </Flex>
    </Wrapper>
  );
};
