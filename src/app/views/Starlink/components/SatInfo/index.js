import React from "react";
import { motion } from "framer-motion";
//STYLES
import { pageVariantsAnim } from "app/styles/animations";
import styled from "styled-components";
import { Flex } from "app/components/common/ui";
import { showDate } from "app/utils/parseDate";
import { useSelector } from "react-redux";
import { selectDashboardSetting } from "app/redux/selectors";

export const SatInfo = React.memo(({ starlink, close }) => {
  const { label, version, height_km, velocity_kms, launch } = starlink;
  const { name, date_utc, flight_number } = launch;
  const { timezone } = useSelector(selectDashboardSetting);

  return (
    <Wrapper
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariantsAnim}
    >
      <Flex
        bg="red"
        style={{ width: "30px", height: "30px" }}
        onClick={close}
      />
      <div>
        <h2>{label}</h2>
        <Flex>
          <Flex flexDirection="column">
            {/* <h4>name {label}</h4> */}
            <h4>version {version}</h4>
            <h4>altitude {height_km.toFixed(2)} km</h4>
            <h4>velocity {velocity_kms.toFixed(2)} km/s</h4>
            <h4>flight {flight_number}</h4>
            <h4>launch {name}</h4>
            <h4>{showDate(date_utc, "day", timezone)}</h4>
          </Flex>
        </Flex>
      </div>
    </Wrapper>
  );
});

const Wrapper = styled(motion.div)`
  flex-direction: row;
  width: auto;

  background-color: black;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 1rem;
  z-index: 1002;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  /* flex-direction: column;   bigger screen */
  /* width: 100%;   bigger screen*/
  align-items: flex-start;

  h2 {
    color: white;
    font-weight: 300;
    margin-bottom: 1rem;
  }

  h4 {
    color: white;
    font-weight: 300;
    margin-bottom: 0.4rem;
  }
`;
