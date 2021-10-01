import React from "react";
import { Box } from "app/components/common/ui";
import { InfoItem } from "../InfoItem";
import { IconButton } from "../More/IconButton";
import { Rocket } from "assets/icons/buttons/Rocket";
import { Landpad } from "assets/icons/buttons/Landpad";
import { Launchpad } from "assets/icons/buttons/Launchpad";
import { Crew } from "assets/icons/buttons/Crew";
import { Payload } from "assets/icons/buttons/Payload";
import { Customers } from "assets/icons/buttons/Customers";

export const More = ({ details }) => {
  return (
    <Box as="details">
      <Box as="summary" style={{ cursor: "pointer" }}>
        more
      </Box>
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
          justifyContent: "space-around",
        }}
      >
        <IconButton icon={<Rocket />} label={"rocket"} />
        <IconButton icon={<Payload />} label={"payload"} />
        <IconButton icon={<Crew />} label={"crew"} />
        <IconButton icon={<Customers />} label={"customers"} />
        <IconButton icon={<Launchpad />} label={"launchpad"} />
        <IconButton icon={<Landpad />} label={"landpad"} />
      </ul>
    </Box>
  );
};
