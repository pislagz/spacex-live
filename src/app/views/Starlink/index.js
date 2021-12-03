import { getLatLngObj } from "tle.js";
import { pageVariantsAnim } from "./animations";
// import { StarlinkInfo } from "./StarlinkInfo/StarlinkInfo";

import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components/macro";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { fetchStarlinkData } from "app/redux/actions/starlink";
import { selectStarlink } from "app/redux/selectors";
import { Flex } from "app/components/common/ui";
import { setRoute } from "app/redux/slices/routeSlice";
import { Earth } from "./earth";
import { useInterval } from "app/hooks/useInterval";

export const Starlink = () => {
  const dispatch = useDispatch();
  const { starlinks = [], status } = useSelector(selectStarlink);

  const [globeData, setGlobeData] = useState([]);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    dispatch(setRoute({ route: "Starlink" }));
    if (status !== "success") {
      dispatch(fetchStarlinkData());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (starlinks) {
      const allData = [];

      starlinks.forEach((starlink) => {
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

        const latLonObj = getLatLngObj(tle);

        const globeDataObject = {
          lat: latLonObj.lat,
          lng: latLonObj.lng,
          alt: 0.9,
          radius: 0.01,
          color: "white",
          label: starlink.spaceTrack.OBJECT_NAME,
          launch: starlink.launch,
          version: starlink.version,
          velocity_kms: starlink.velocity_kms,
          height_km: starlink.height_km,
        };

        allData.push(globeDataObject);
      });

      setGlobeData((prev) => {
        return allData;
      });
    }
  }, [timer, starlinks]);

  return (
    <Flex width="100%" height="100%" overflow="hidden" justifyContent="center">
      <Flex>
        <StyledStarlink
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariantsAnim}>
          {globeData && <Earth gData={globeData} />}
        </StyledStarlink>
      </Flex>
    </Flex>
  );
};

export default Starlink;

const StyledStarlink = styled(motion.div)`
  /* height: 95vh; */
`;
