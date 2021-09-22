import { Flex } from "app/components/common/ui";
import { InfoItem } from "app/components/InfoTile/InfoItem";
import React from "react";
import { Wrapper, MainTitle, LeftCol, RightCol } from "./styled";

export const InfoTile = ({ i }) => (
  //Main wrapper
  <Wrapper m={{ _: "0.5rem", md: "1rem" }} p={{ _: "1.5rem", md: "2rem" }}>
    <Flex flexDirection="column">
      <MainTitle fontSize={{ _: "md", lg: "lg" }}>
        Upcoming launch {i}
      </MainTitle>
      <Flex mt="1rem" width={"100%"} flexDirection="row">
        <LeftCol>
          <InfoItem label="mission&nbsp;name" info="Inspiration4" />
          <InfoItem label="flight&nbsp;number" info="123" />
          <InfoItem label="time" info="12 June 2021" />
          <InfoItem label="links" info={"W Y R"} />
          <InfoItem label="more" info="more" />
        </LeftCol>
        <RightCol>
          <InfoItem
            label="mission&nbsp;patch"
            patch="https://i.imgur.com/J1uM5nz.png"
          />
          <InfoItem label="crew" info="👤👤👤👤" />
        </RightCol>
      </Flex>
    </Flex>
  </Wrapper>
);
