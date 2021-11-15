import React from "react";
import { Flex } from "app/components/common/ui";
import { InfoItem } from "app/components/common/InfoItem";

export const Dimensions = ({ data }) => {
  const { diameter, height, mass } = data;

  return (
    <>
      <Flex flexDirection="column">
        {console.log({ diameter, height, mass })}
        <InfoItem dark label="diameter" info={diameter.meters} />
        <InfoItem dark label="height" info={height.meters} />
        <InfoItem dark label="mass" info={mass.kg} />
      </Flex>
    </>
  );
};
