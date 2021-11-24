import React from "react";
import {
  MobileFiller,
  Wrapper,
} from "app/components/common/Modal/components/common/Wrapper";
import { Flex } from "app/components/common/ui";
import { Rocket as RocketCard } from "./components/Rocket";
import { Booster } from "./components/Booster";
import { Fairings as FairingsCard } from "./components/Fairings";
import { Capsule as CapsuleCard } from "./components/Capsule";
import { animationProps } from "app/styles/animations";

export const Rocket = ({ cores, rocketName, capsule, fairings }) => {
  return (
    <Wrapper
      height="inherit"
      minHeight="480px"
      marginTop={{ _: "unset", lg: "20px" }}
      alignItems={{ _: "unset", xl: "center" }}
      flexWrap={{ _: "unset", lg: "wrap" }}
      {...animationProps}
    >
      {console.log({
        rocketName,
        capsule,
        fairings,
      })}
      <Flex
        marginTop={{ _: "40px", lg: "unset" }}
        mr={{ _: "unset", lg: "3rem" }}
        mb={{ _: "1rem", lg: "unset" }}
        flexDirection="column"
      >
        <RocketCard rocketName={rocketName} capsule={capsule} />
      </Flex>

      {fairings || capsule ? (
        <Flex
          mr={{ _: "unset", lg: "3rem" }}
          mb={{ _: "1rem", lg: "unset" }}
          flexDirection="column"
        >
          {capsule ? null : fairings && <FairingsCard fairings={fairings} />}
          {capsule && <CapsuleCard capsule={capsule} />}
        </Flex>
      ) : null}

      <Flex flexDirection="column">
        <Booster cores={cores} />
        <MobileFiller />
      </Flex>
    </Wrapper>
  );
};
