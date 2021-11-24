import React, { useState } from "react";
import { Flex, Box } from "app/components/common/ui";
import { InfoItem } from "app/components/common/InfoItem";
import { colors } from "app/styles/theme/colors";
import { shadows } from "app/styles/theme/shadows";
import { addSeparators } from "app/utils/textFormatting";
import { Switcher } from "app/components/common/Switcher/index.js";
import { animationProps } from "app/styles/animations";

export const Payload = ({ payloads }) => {
  const [selectedPayload, setSelectedPayload] = useState(0);

  const {
    customers,
    // manufacturers,
    mass_kg: massKG,
    mass_lbs: massLBS,
    name,
    // nationalities,
    orbit,
    type,
  } = payloads[selectedPayload];

  const data = [
    { label: "type", info: type },
    {
      label: customers.length > 1 ? "customers" : "customer",
      info: customers.length ? customers.join(", ") : "Unavailable",
    },
    {
      label: "mass",
      info:
        massKG && massLBS
          ? `${addSeparators(massKG)}kg (${addSeparators(massLBS)}lbs)`
          : "Unavailable",
    },
    { label: "orbit", info: orbit },
  ];

  return (
    <Flex
      flexDirection="column"
      alignSelf={{ _: "unset", lg: "center" }}
      margin="0 auto"
      {...animationProps}
    >
      {payloads.length > 1 && (
        <>
          <InfoItem dark label="payload" />
          <Switcher
            options={payloads.map((e, i) => ({
              name: `${i + 1}`,
            }))}
            activeOption={selectedPayload}
            handleClick={setSelectedPayload}
          />
        </>
      )}
      <Flex
        flexDirection={{ _: "column", md: "row" }}
        boxShadow={shadows.medium}
        borderRadius="md"
        width={{ _: "unset", lg: "600px" }}
        overflow="hidden"
      >
        <Flex flexDirection="column" width="100%">
          <Flex width="100%">
            <Box
              as="p"
              m="0"
              p="10px 20px"
              fontSize="md"
              color={colors.white}
              bg={colors.black.dark}
              width="100%"
            >
              {name}
            </Box>
          </Flex>
          <Flex flexDirection="column" padding="2rem">
            {data.map(({ label, info }) => (
              <InfoItem key={label} label={label} info={info} dark />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
