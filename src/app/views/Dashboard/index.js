import React, { useEffect, useState, useCallback } from "react";
import { Flex } from "app/components/common/ui";
import { InfoTile } from "app/components/InfoTile";
import { api } from "app/api/launch";

export const Dashboard = () => {
  const [nextLaunch, setNextLaunch] = useState({});
  const [prevLaunch, setPrevLaunch] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllData = useCallback(async () => {
    try {
      const [r1, r2] = await Promise.all([
        api.getNextLaunch(),
        api.getPreviousLaunch(),
      ]);
      console.log(r1.data.docs[0]);
      console.log(r2.data.docs[0]);
      setNextLaunch(r1.data.docs[0]);
      setPrevLaunch(r2.data.docs[0]);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  return (
    <>
      {!isLoading && (
        <>
          <Flex alignItems="center" flexDirection="column">
            <InfoTile {...nextLaunch} />
            <InfoTile {...prevLaunch} />
          </Flex>
          <Flex alignItems="center" flexDirection="column">
            <InfoTile title="Space stations" />
            <InfoTile title="Starlink" />
          </Flex>
        </>
      )}
    </>
  );
};
