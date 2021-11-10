import React, { useState } from "react";
import { Flex } from "app/components/common/ui";
import { InfoItem } from "app/components/common/InfoItem";
import { colors } from "app/styles/theme/colors";
import { shadows } from "app/styles/theme/shadows";
import { addSeparators } from "app/utils/textFormatting";
import { Switcher } from "app/components/common/Switcher/index.js";

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
    { label: "name", info: name },
    { label: "type", info: type },
    {
      label: customers.length > 1 ? "customers" : "customer",
      info: customers.join(", "),
    },
    {
      label: "mass",
      info:
        massKG && massLBS
          ? `${addSeparators(massKG)}kg (${addSeparators(massLBS)}lbs)`
          : "Unavailable",
    },
    { label: "orbit", info: orbit },
    // {
    //   label: manufacturers.length > 1 ? "manufacturers" : "manufacturer",
    //   info: manufacturers.length ? manufacturers.join(", ") : "Unspecified",
    // },
    // {
    //   label: nationalities
    //     ? nationalities.length > 1
    //       ? "nationalities"
    //       : nationalities.length === 1
    //       ? "nationality"
    //       : null
    //     : null,
    //   info: nationalities.length ? nationalities : null,
    // },
  ];

  return (
    <Flex
      flexDirection="column"
      alignSelf={{ _: "unset", lg: "center" }}
      margin="0 auto"
    >
      <InfoItem label="payload" labelColor={colors.gray.mediumDark} />
      {/* payloads.length > 1 && */}
      {payloads.length && (
        <Switcher
          options={payloads}
          activeOption={selectedPayload}
          handleClick={setSelectedPayload}
        />
      )}
      <Flex
        flexDirection={{ _: "column", md: "row" }}
        boxShadow={shadows.medium}
        borderRadius="lg"
        padding="2rem"
        width={{ _: "unset", lg: "600px" }}
      >
        <Flex flexDirection="column">
          {data.map(({ label, info }) => (
            <InfoItem
              key={label}
              label={label}
              info={info}
              labelColor={colors.gray.mediumDark}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
