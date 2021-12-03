import React from "react";
import { motion } from "framer-motion";
import { Satellite } from "./Satellite";
import { Mission } from "./Mission";

//STYLES
import { pageVariantsAnim } from "app/styles/animations";
import styled from "styled-components";
import { Flex } from "app/components/common/ui";

export const StarlinkInfo = React.memo(({ starlink, close }) => {
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
      <Satellite
        label={starlink.label}
        version={starlink.version}
        height={starlink.height_km}
        velocity={starlink.velocity_kms}
      />
      <Mission
        name={starlink.launch.name}
        dateUtc={starlink.launch.date_utc}
        id={starlink.launch.id}
        flightNumber={starlink.launch.flight_number}
      />
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
