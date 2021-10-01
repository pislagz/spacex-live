import React, { useEffect, useState, useCallback } from "react";
import { Flex } from "app/components/common/ui";
import { InfoTile } from "app/views/Dashboard/components/InfoTile";
import { api } from "app/api/launch";

export const Dashboard = () => {
  const [nextLaunch, setNextLaunch] = useState({});
  const [prevLaunch, setPrevLaunch] = useState({});
  // const [customLaunch, setCustomLaunch] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllData = useCallback(async () => {
    try {
      const [r1, r2 /*, r3*/] = await Promise.all([
        api.getNextLaunch(),
        api.getPreviousLaunch(),
        api.getLaunchByFlightNumber(137),
      ]);
      console.log(r1.data.docs[0]);
      console.log(r2.data.docs[0]);
      // console.log(r3.data.docs[0]);
      setNextLaunch(r1.data.docs[0]);
      setPrevLaunch(r2.data.docs[0]);
      // setCustomLaunch(r3.data.docs[0]);
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
            {/* <InfoTile title="Custom launch" {...customLaunch} /> */}
            <InfoTile type="launch" title="Upcoming launch" {...nextLaunch} />
            <InfoTile type="launch" title="Previous launch" {...prevLaunch} />
          </Flex>
          <Flex alignItems="center" flexDirection="column">
            <InfoTile title="Launch facilities" />
            <InfoTile title="Starlink" />
          </Flex>
        </>
      )}
    </>
  );
};
