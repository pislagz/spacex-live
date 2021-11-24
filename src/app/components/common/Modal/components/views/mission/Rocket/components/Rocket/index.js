import React from "react";
import * as S from "../styled";
import { Box, Flex } from "app/components/common/ui";
import { links } from "../links.js";
import { InfoItem } from "app/components/common/InfoItem";
import { colors } from "app/styles/theme/colors";

export const Rocket = ({ rocketName, capsule }) => (
  <>
    <Box as="p" m="0" p="0" fontSize="md">
      Rocket
    </Box>
    <S.Card
      src={
        rocketName === "Falcon 9"
          ? capsule
            ? links.rocket.falcon9.crew
            : links.rocket.falcon9.cargo
          : rocketName === "Falcon Heavy"
          ? links.rocket.falconHeavy
          : rocketName === "Falcon 1"
          ? links.rocket.falcon1
          : links.rocket.falcon9.cargo
      }
    >
      <Flex>
        <InfoItem
          color={colors.white}
          label="name"
          info={rocketName || "Unknown"}
        />
      </Flex>
    </S.Card>
  </>
);
