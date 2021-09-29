import { Flex } from "app/components/common/ui";
import { InfoItem } from "app/components/InfoTile/InfoItem";
import { More } from "app/components/InfoTile/More";
import React from "react";
import { Wrapper, MainTitle, LeftCol, RightCol } from "./styled";

export const InfoTile = ({
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
    <Wrapper m={{ _: "0.5rem", md: "1rem" }} p={{ _: "1.5rem", md: "2rem" }}>
      <Flex flexDirection="column">
        <MainTitle fontSize={{ _: "md", lg: "lg" }}>{title}</MainTitle>
        <Flex mt="1rem" width={"100%"} flexDirection="row">
          <LeftCol>
            <InfoItem label="mission&nbsp;name" info={missionName} />
            <InfoItem label="rocket" info={rocket?.name} />
            <InfoItem label="flight&nbsp;number" info={flightNo} />
            <InfoItem label="time" info={String(dateUTC).slice(0, 10)} />
            {(links?.reddit?.campaign ||
              links?.wikipedia ||
              links?.webcast) && (
              <InfoItem
                label="links"
                links={{
                  wikipedia: links?.wikipedia,
                  youtube: links?.webcast,
                  reddit: links?.reddit?.campaign,
                }}
              />
            )}
          </LeftCol>
          <RightCol>
            <InfoItem
              label={links?.patch?.small ? "mission patch" : "rocket logo"}
              patchUrl={links?.patch?.small}
              altPatch={rocket?.name}
            />

            {crew?.length ? (
              <InfoItem
                label="crew"
                info={crew?.map((person) => (
                  <React.Fragment key={person.crew.name}>👤</React.Fragment>
                ))}
              />
            ) : null}

            {!crew?.length ? (
              <>
                <InfoItem label="launchpad" info={launchpad?.name} />
              </>
            ) : null}
          </RightCol>
        </Flex>
        <More details={details} />
      </Flex>
    </Wrapper>
  );
};
