import { Flex } from "app/components/common/ui";
import { InfoItem } from "app/components/InfoTile/InfoItem";
import React from "react";
import { Wrapper, MainTitle } from "./styled";

export const InfoTile = ({ i }) => (
  <Wrapper
    width={{ _: "90%", md: "45%" }}
    p={{ _: "sm", lg: "md" }}
    margin={{ _: "1rem 0", md: "1rem" }}
  >
    <Flex width={"100%"} flexDirection="column">
      <MainTitle fontSize={{ _: "sm", lg: "lg" }}>
        Upcoming launch {i}
      </MainTitle>
      <Flex mt="1rem" width={"100%"} flexDirection="row">
        <Flex
          width={"50%"}
          flexDirection="column"
          justifyContent="space-between"
        >
          <InfoItem label="mission name" info="Inspiration4" />
          <InfoItem label="flight number" info="123" />
          <InfoItem label="time" info="12 June 2021" />
          <InfoItem label="links" info={"W Y R"} />
          <InfoItem label="more" info="more" />
        </Flex>
        <Flex
          width={"50%"}
          flexDirection="column"
          justifyContent="space-between"
        >
          <InfoItem
            label="mission patch"
            patch="https://i.imgur.com/J1uM5nz.png"
          />
          <InfoItem label="crew" info="👤👤👤👤" />
        </Flex>
      </Flex>
    </Flex>
  </Wrapper>
);
