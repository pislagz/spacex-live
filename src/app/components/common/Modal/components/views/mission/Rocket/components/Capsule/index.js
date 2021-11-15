import React from "react";
import * as S from "../styled";
import { Box, Flex } from "app/components/common/ui";
import { links } from "../links.js";
import { InfoItem } from "app/components/common/InfoItem";
import { colors } from "app/styles/theme/colors";

export const Capsule = ({ capsule }) => {
  const {
    launches,
    serial,

    type,
  } = capsule;

  const data = [
    { label: "type", info: type },
    { label: "launches", info: launches.length },
    { label: "serial number", info: serial },
  ];

  return (
    <>
      <Box as="p" m="0" p="0" fontSize="md">
        Capsule
      </Box>
      <S.Card src={links.capsule}>
        <Flex>
          <Flex flexDirection="column" marginTop="auto">
            {data.map((it) => (
              <InfoItem
                key={it.label}
                label={it.label}
                info={it.info}
                color={colors.white}
              />
            ))}
          </Flex>
        </Flex>
      </S.Card>
    </>
  );
};
