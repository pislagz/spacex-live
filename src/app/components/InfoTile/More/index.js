import React from "react";
import { Box } from "app/components/common/ui";
import { InfoItem } from "app/components/InfoTile/InfoItem";
import { useState } from "react";

export const More = ({ details }) => {
  const [isMore, setIsMore] = useState("true");

  return (
    <Box as="details" onClick={() => setIsMore(!isMore)}>
      <Box as="summary">{isMore ? "more" : "less"}</Box>
      <InfoItem
        label="details"
        info={
          details
            ? details
            : "No descriptive details have been provided for this mission."
        }
      />
    </Box>
  );
};
