import { Flex } from "app/components/common/ui";
import { InfoItem } from "app/components/InfoTile/InfoItem";
import React from "react";
import { Wrapper, MainTitle, LeftCol, RightCol } from "./styled";

export const InfoTile = ({
  name: missionName,
  flight_number: flightNo,
  date_utc: dateUTC,
  links,
  rocket,
  crew,
  payloads,
}) => {
  return (
    <Wrapper m={{ _: "0.5rem", md: "1rem" }} p={{ _: "1.5rem", md: "2rem" }}>
      <Flex flexDirection="column">
        <MainTitle fontSize={{ _: "md", lg: "lg" }}>Upcoming launch</MainTitle>
        <Flex mt="1rem" width={"100%"} flexDirection="row">
          <LeftCol>
            <InfoItem label="mission&nbsp;name" info={missionName} />
            <InfoItem label="flight&nbsp;number" info={flightNo} />
            <InfoItem label="time" info={String(dateUTC).slice(0, 10)} />
            <InfoItem label="links" info={"W Y R"} />
            <InfoItem label="more" info="more" />
          </LeftCol>
          <RightCol>
            <InfoItem
              label={
                links?.patch?.small !== null ? "mission patch" : "no patch yet"
              }
              patchUrl={
                links?.patch?.small !== null
                  ? links?.patch?.small
                  : "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg"
              }
            />
            {crew?.length ? (
              <InfoItem
                label="crew"
                info={crew?.map((person) => (
                  <React.Fragment key={person.crew.name}>👤</React.Fragment>
                ))}
              />
            ) : payloads?.length ? (
              payloads[0]?.type
            ) : null}
          </RightCol>
        </Flex>
      </Flex>
    </Wrapper>
  );
};
