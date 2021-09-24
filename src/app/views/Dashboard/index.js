import React, { useEffect } from "react";
import { Flex } from "app/components/common/ui";
import { InfoTile } from "app/components/InfoTile";
import { api } from "app/api/launch";

export const Dashboard = () => {
  const fetchAllData = async () => {
    await api.getPreviousLaunch().then((res) => console.log(res.data.docs[0]));
    await api.getNextLaunch().then((res) => console.log(res.data.docs[0]));
  };

  useEffect(() => {
    fetchAllData();
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
