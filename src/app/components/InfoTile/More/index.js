import React from "react";
import { Box } from "app/components/common/ui";
import { InfoItem } from "app/components/InfoTile/InfoItem";
import { useState } from "react";
import { IconButton } from "app/components/InfoTile/More/IconButton";
import { Rocket } from "assets/icons/buttons/Rocket";
import { Landpad } from "assets/icons/buttons/Landpad";
import { Launchpad } from "assets/icons/buttons/Launchpad";
import { Crew } from "assets/icons/buttons/Crew";
import { Payload } from "assets/icons/buttons/Payload";
import { Customers } from "assets/icons/buttons/Customers";

export const More = ({ details }) => {
  const [isMore, setIsMore] = useState("true");

  return (
    <Box as="details">
      <Box
        as="summary"
        style={{ cursor: "pointer" }}
        onClick={() => setIsMore(!isMore)}
      >
        {isMore ? "more" : "less"}
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
        <li>
          <IconButton icon={<Rocket />} label={"rocket"} />
        </li>
        <li>
          <IconButton icon={<Landpad />} label={"landpad"} />
        </li>
        <li>
          <IconButton icon={<Launchpad />} label={"launchpad"} />
        </li>
        <li>
          <IconButton icon={<Crew />} label={"crew"} />
        </li>
        <li>
          <IconButton icon={<Payload />} label={"payload"} />
        </li>
        <li>
          <IconButton icon={<Customers />} label={"customers"} />
        </li>
      </ul>
    </Box>
  );
};
