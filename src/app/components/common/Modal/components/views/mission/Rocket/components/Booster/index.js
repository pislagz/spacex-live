import React, { useState } from "react";
import * as S from "../styled";
import { Box, Flex } from "app/components/common/ui";
import { links } from "../links.js";
import { InfoItem } from "app/components/common/InfoItem";
import { colors } from "app/styles/theme/colors";
import { Switcher } from "app/components/common/Switcher";

export const Booster = ({ cores }) => {
  const [selectedBooster, setSelectedBooster] = useState(0);

  const serial = cores[selectedBooster]?.core?.serial || "No data";
  const flight = cores[selectedBooster]?.flight || "No data";
  const landingType = cores[selectedBooster]?.landing_type;
  const landpad = cores[selectedBooster]?.landpad?.name;
  const boosterNumbers = cores.map(({ core, index }) => ({
    name: core?.serial || index,
  }));

  return (
    <>
      <Box as="p" m="0" p="0" fontSize="md">
        Booster
      </Box>
      <S.Card src={links.booster}>
        <Flex flexDirection="column" width="100%" height="100%">
          {boosterNumbers.length > 1 && (
            <Switcher
              options={boosterNumbers}
              activeOption={selectedBooster}
              handleClick={setSelectedBooster}
            />
          )}
          <Flex flexDirection="column" marginTop="auto">
            <InfoItem
              color={colors.white}
              label="serial number"
              info={serial}
            />
            <InfoItem color={colors.white} label="flights" info={flight} />
            {landingType && (
              <InfoItem
                color={colors.white}
                label="landing type"
                info={landingType}
              />
            )}
            {landpad && (
              <InfoItem color={colors.white} label="landpad" info={landpad} />
            )}
          </Flex>
        </Flex>
      </S.Card>
    </>
  );
};
