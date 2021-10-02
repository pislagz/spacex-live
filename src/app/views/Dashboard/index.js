import React, { useEffect, useState, useCallback } from "react";
import { Flex } from "app/components/common/ui";
import { LaunchTile } from "./components/LaunchTile";
import { api } from "app/api";
import { COORDINATES } from "app/constants/coordinates";

export const Dashboard = () => {
  const [nextLaunch, setNextLaunch] = useState({});
  const [prevLaunch, setPrevLaunch] = useState({});
  const [dataState, setDataState] = useState("idle");

  const fetchAllData = useCallback(async () => {
    setDataState("pending");

    try {
      const [
        nextLaunchResponse,
        prevLaunchResponse,
        canaveralResponse,
        starbaseResponse,
        vanderbergResponse,
      ] = await Promise.all([
        api.launch.getNextLaunch(),
        api.launch.getPrevLaunch(),
        api.weather.getWeatherData(COORDINATES.CANAVERAL),
        api.weather.getWeatherData(COORDINATES.STARBASE),
        api.weather.getWeatherData(COORDINATES.VANDENBERG),
      ]);
      console.log({ prevLaunchResponse, nextLaunchResponse });
      console.log({ canaveralResponse, starbaseResponse, vanderbergResponse });

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
