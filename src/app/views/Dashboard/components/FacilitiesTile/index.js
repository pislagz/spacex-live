import React from "react";
import { Tile } from "app/components/common/Tile";
import { Flex } from "app/components/common/ui";
import { Facility } from "app/views/Dashboard/components/FacilitiesTile/Facility";

export const FacilitiesTile = ({ title }) => (
  <Tile title={title}>
    <Flex flexDirection="column">
      <Facility image={"https://i.imgur.com/asp5L08.png"} />
      <Facility image={"https://i.imgur.com/9oEMXwa.png"} />
    </Flex>
  </Tile>
);
