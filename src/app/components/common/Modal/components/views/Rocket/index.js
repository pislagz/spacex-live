import React, { useState } from "react";
import * as S from "./styled";
import {
  MobileFiller,
  Wrapper,
} from "app/components/common/Modal/components/common/Wrapper";
import { Flex, Box } from "app/components/common/ui";
import { InfoItem } from "app/components/common/InfoItem";
import { colors } from "app/styles/theme/colors";
import { Switcher } from "app/components/common/Switcher";

//fh
//https://live.staticflickr.com/4631/39337245145_75611f0118_z.jpg

//f9
//https://live.staticflickr.com/65535/49461673792_8d92673fde_h.jpg

//crew
//https://live.staticflickr.com/65535/51641283330_daaf55ee99_z.jpg

export const Rocket = ({ cores, rocketName }) => {
  const [selectedBooster, setSelectedBooster] = useState(0);

  const { reuse_count: reuseCount, serial } = cores[selectedBooster].core;
  const { flight, landing_type: landingType, reused } = cores[selectedBooster];
  const landpad = cores[selectedBooster].landpad.name;

  const boosterNumbers = cores.map(({ core }) => ({ name: core.serial }));

  return (
    <Wrapper height="inherit" minHeight="495px" mt={{ _: "40px" }}>
      {console.log({
        reused,
        reuseCount,
        landingType,
        flight,
        serial,
        landpad,
        rocketName,
      })}
      <Flex
        mr={{ _: "unset", lg: "2rem" }}
        mb={{ _: "1rem", lg: "unset" }}
        flexDirection="column"
      >
        <Box as="p" m="0" p="0" fontSize="md">
          Rocket
        </Box>
        <S.Card
          src={
            "https://live.staticflickr.com/65535/49461673792_8d92673fde_h.jpg"
          }
        >
          <Flex>
            <InfoItem color={colors.white} label="name" info={rocketName} />
          </Flex>
        </S.Card>
      </Flex>

      <Flex flexDirection="column">
        <Box as="p" m="0" p="0" fontSize="md">
          Booster
        </Box>
        <S.Card src="https://live.staticflickr.com/65535/50740993291_7f6706d814_b.jpg">
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
              <InfoItem
                color={colors.white}
                label={reused ? "flights/reuses" : "flights"}
                info={reused ? `${flight}/${reuseCount}` : flight}
              />
              <InfoItem
                color={colors.white}
                label="landing type"
                info={landingType}
              />
              <InfoItem color={colors.white} label="landpad" info={landpad} />
            </Flex>
          </Flex>
        </S.Card>
        <MobileFiller />
      </Flex>
    </Wrapper>
  );
};
