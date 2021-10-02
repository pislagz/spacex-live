import React, { useEffect, useState, useCallback } from "react";
import { Flex } from "app/components/common/ui";
import { LaunchTile } from "./components/LaunchTile";
import { api } from "app/api/launch";

export const Dashboard = () => {
  const [nextLaunch, setNextLaunch] = useState({});
  const [prevLaunch, setPrevLaunch] = useState({});
  // const [customLaunch, setCustomLaunch] = useState({});
  const [dataState, setDataState] = useState("idle");

  const fetchAllData = useCallback(async () => {
    setDataState("pending");

    try {
      const [nextLaunchResponse, prevLaunchResponse] = await Promise.all([
        api.getNextLaunch(),
        api.getPrevLaunch(),
        api.getLaunchByFlightNumber(137),
      ]);
      console.log({ prevLaunchResponse, nextLaunchResponse });

      setNextLaunch(nextLaunchResponse);
      setPrevLaunch(prevLaunchResponse);

      setDataState("fullfilled");
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  return (
    <>
      {dataState === "fullfilled" && (
        <>
          <Flex alignItems="center" flexDirection="column">
            {/* <InfoTile title="Custom launch" {...customLaunch} /> */}
            <LaunchTile launch="next" {...nextLaunch} />
            <LaunchTile launch="prev" {...prevLaunch} />
          </Flex>
          <Flex alignItems="center" flexDirection="column">
            <LaunchTile title="Launch facilities" />
            <LaunchTile title="Starlink" />
          </Flex>
        </>
      )}
    </>
  );
};
