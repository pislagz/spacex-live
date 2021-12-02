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

export const Starlink = () => {
  const [showStarlinkInfo, setShowStarlinkInfo] = useState(false);
  const { starlinks = [], status } = useSelector(selectStarlink);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRoute({ route: "Starlink" }));
    if (status !== "success") {
      dispatch(fetchStarlinkData());
    }
  }, [dispatch, status]);

  const closeStarlinkInfoHandler = useCallback(() => {
    setShowStarlinkInfo(false);
  }, []);

  const gData = [];

  if (starlinks) {
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

      gData.push({
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
      });
    });
  }

  let globe = <></>;

  // const showStarlinkInfoHandler = (point) => {
  // setStarlinkInfoData(point);
  // setShowStarlinkInfo(true);
  // };

  if (gData) {
    globe = <Earth gData={gData} />;
  }

  return (
    <Flex width="100%" height="100%" overflow="hidden" justifyContent="center">
      <Flex>
        <StyledStarlink
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariantsAnim}
        >
          {globe}
          <AnimatePresence>
            {/* {showStarlinkInfo && (
            <StarlinkInfo
              starlink={starlinkInfoData}
              close={closeStarlinkInfoHandler}
            />
          )} */}
          </AnimatePresence>
        </StyledStarlink>
      </Flex>
    </Flex>
  );
};

export default Starlink;

const StyledStarlink = styled(motion.div)`
  /* height: 95vh; */
`;

// import { Flex } from "app/components/common/ui";
// import { setRoute } from "app/redux/slices/routeSlice";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";

// export const Starlink = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(setRoute({ route: "Starlink" }));
//   }, [dispatch]);

//   return (
//     <Flex width='100%' height='100%'>
//     </Flex>
//   );
// };
