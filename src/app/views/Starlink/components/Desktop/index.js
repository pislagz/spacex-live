import { useCallback, useEffect, useRef, useState } from "react";
import { Loading } from "app/components/common/Loading";
import { Error } from "app/components/common/Error";
import { Flex } from "app/components/common/ui";
import { AnimatePresence, motion } from "framer-motion";
import { pageVariantsAnim } from "app/styles/animations";
import { SatInfo } from "./components/SatInfo";
import { Earth } from "./components/Earth";
import { useSelector, useDispatch } from "react-redux";
import { fetchStarlinkData } from "app/redux/actions/starlink";
import { selectStarlink } from "app/redux/selectors";
import { setRoute } from "app/redux/slices/routeSlice";
import { useInterval } from "app/hooks/useInterval";

export const Desktop = ({ bp }) => {
  const globeData = useRef([]);
  const { starlinks = [], status } = useSelector(selectStarlink);

  const showStarlinkInfoHandler = (point) => {
    setStarlinkInfoData(point);
    setShowStarlinkInfo(true);
  };
  const closeStarlinkInfoHandler = useCallback(() => {
    setShowStarlinkInfo(false);
  }, []);

  useInterval(() => {
    setTimer(timer + 1);
  }, 1000);

  const [timer, setTimer] = useState(0);
  const [showStarlinkInfo, setShowStarlinkInfo] = useState(false);
  const [starlinkInfoData, setStarlinkInfoData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRoute({ route: "Starlink" }));
    if (status !== "success") {
      dispatch(fetchStarlinkData());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (starlinks) {
      const allData = starlinks.map((starlink) => {
        const TLE0 = starlink?.spaceTrack.TLE_LINE0.substring(
          2,
          starlink?.spaceTrack.TLE_LINE0.length
        );

        const tle =
          TLE0 +
          " \n" +
          starlink?.spaceTrack.TLE_LINE1 +
          "\n" +
          starlink?.spaceTrack.TLE_LINE2;

        const globeDataObject = {
          lat: tle,
          lng: tle,
          alt: 0.9,
          radius: 0.01,
          color: "white",
          label: starlink.spaceTrack.OBJECT_NAME,
          launch: starlink.launch,
          version: starlink.version,
          velocity_kms: starlink.velocity_kms,
          height_km: starlink.height_km,
        };

        return globeDataObject;
      });

      globeData.current = allData;
    }
  }, [starlinks]);

  return (
    <Flex
      width="100%"
      height="100%"
      overflow="hidden"
      justifyContent="center"
      alignItems="center"
    >
      <Flex>
        {status === "loading" && <Loading text="downloading satellites" />}
        {status === "failed" && <Error />}
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariantsAnim}
        >
          {globeData && (
            <Earth
              gData={globeData.current}
              handleClick={showStarlinkInfoHandler}
              bp={bp}
            />
          )}
          <AnimatePresence>
            {showStarlinkInfo && (
              <SatInfo
                starlink={starlinkInfoData}
                close={closeStarlinkInfoHandler}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </Flex>
    </Flex>
  );
};
