import { Box } from "app/components/common/ui";
import React from "react";
import { Link } from "react-router-dom";

export const Mission = ({ flightNumber, name, dateUtc, id }) => {
  return (
    <Box mt="0" ml="4rem">
      <h2>{"launch"}</h2>
      <Link to={`launch/${id}`}>
        <Box style={{ cursor: "pointer" }}>
          <h3>{name}</h3>
          <h4>
            {("key", { date: new Date(dateUtc) })} | #{flightNumber}
          </h4>
        </Box>
      </Link>
    </Box>
  );
};

// box bigger screens
/* margin-top: 2rem;
  margin-left: 0; */
