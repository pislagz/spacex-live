import React, { useState } from "react";
import * as S from "./styled.js";
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
    manufacturers,
    mass_kg: massKG,
    mass_lbs: massLBS,
    name,
    nationalities,
    orbit,
    type,
  } = payloads[selectedPayload];

  const data = [
    { label: "name", info: name },
    { label: "type", info: type },
    {
      label: "mass",
      info:
        massKG && massLBS
          ? `${addSeparators(massKG)}kg (${addSeparators(massLBS)}lbs)`
          : "Unavailable",
    },
    {
      label: customers.length > 1 ? "customers" : "customer",
      info: customers.join(", "),
    },
    {
      label: manufacturers.length > 1 ? "manufacturers" : "manufacturer",
      info: manufacturers.join(", "),
    },
    { label: "orbit", info: orbit },
    {
      label: nationalities
        ? nationalities > 1
          ? "nationalities"
          : "nationality"
        : null,
      info: nationalities,
    },
  ];

  return (
    <Flex flexDirection="column" alignSelf="center" margin="0 auto">
      {/* payloads.length > 1 && */}
      {payloads.length && (
        <Switcher
          options={payloads}
          activeOption={selectedPayload}
          handleClick={setSelectedPayload}
        />
      )}
      <S.Card
        flexDirection={{ _: "column", md: "row" }}
        boxShadow={shadows.medium}
        borderRadius="lg"
        padding="2rem"
        justifyContent="space-around"
      >
        <S.Info>
          {data.map(({ label, info }) => (
            <InfoItem
              key={label}
              label={label}
              info={info}
              labelColor={colors.gray.mediumDark}
            />
          ))}
        </S.Info>
      </S.Card>
    </Flex>
  );
};
