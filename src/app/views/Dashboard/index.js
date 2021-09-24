import React, { useEffect } from "react";
import { Flex } from "app/components/common/ui";
import { InfoTile } from "app/components/InfoTile";
import { dashboard } from "app/api/dashboard";

export const Dashboard = () => {
  useEffect(() => {
    dashboard.getUpcomingOrPreviousLaunch("upcoming");
    dashboard.getUpcomingOrPreviousLaunch("previous");
  }, []);

  return (
    <>
      <Flex alignItems="center" flexDirection="column">
        <InfoTile i="1" />
        <InfoTile i="2" />
      </Flex>
      <Flex alignItems="center" flexDirection="column">
        <InfoTile i="3" />
        <InfoTile i="4" />
      </Flex>
    </>
  );
};
