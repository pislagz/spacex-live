import React from "react";
import {
  MobileFiller,
  Wrapper,
} from "app/components/common/Modal/components/common/Wrapper";
import { Flex } from "app/components/common/ui";
import { Rocket as RocketCard } from "./components/Rocket";
import { Booster } from "./components/Booster";
import { Fairings } from "./components/Fairings";
import { Capsule } from "./components/Capsule";

export const Rocket = ({ cores, rocketName, capsule, fairings }) => {
  return (
    <Wrapper
      height="inherit"
      minHeight="480px"
      marginTop={{ _: "unset", lg: "20px" }}
      alignItems={{ _: "unset", xl: "center" }}
    >
      {console.log({
        rocketName,
        capsule,
        fairings,
      })}
      <Flex
        marginTop={{ _: "40px", lg: "unset" }}
        mr={{ _: "unset", lg: "2rem" }}
        mb={{ _: "1rem", lg: "unset" }}
        flexDirection="column"
      >
        <RocketCard rocketName={rocketName} capsule={capsule} />
      </Flex>

      <Flex
        marginTop={{ _: "40px", lg: "unset" }}
        mr={{ _: "unset", lg: "2rem" }}
        mb={{ _: "1rem", lg: "unset" }}
        flexDirection="column"
      >
        {fairings && <Fairings fairings={fairings} />}
        {capsule && <Capsule capsule={capsule} />}
      </Flex>

      <Flex flexDirection="column">
        <Booster cores={cores} />
        <MobileFiller />
      </Flex>
    </Wrapper>
  );
};
