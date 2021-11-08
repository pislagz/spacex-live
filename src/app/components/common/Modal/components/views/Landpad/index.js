import React, { useState } from "react";
import { S } from "./styled";
import { InfoItem } from "app/components/common/InfoItem";
import { colors } from "app/styles/theme/colors";
import { Flex, Image } from "app/components/common/ui";
import { Maps } from "assets/icons/buttons/Maps";
import { firstToUpperCase } from "app/utils/textFormatting";
import { Switcher } from "app/components/common/Switcher";

export const Landpad = ({ cores, type }) => {
  const [selectedBooster, setSelectedBooster] = useState(0);

  const {
    full_name: fullName,
    name,
    images,
    details,
    latitude: lat,
    longitude: lon,
    landing_attempts: landingAttempts,
    landing_successes: landingSuccesses,
    locality,
    region,
    status,
  } = cores[selectedBooster].landpad;

  const landingFailures = landingAttempts - landingSuccesses;

  const boosterNumbers = cores.map(({ core }) => ({ name: core.serial }));

  return (
    <Flex flexDirection="column">
      {type.includes("landpad") && (
        // <div>
        //   {cores.map((core, index) => (
        //     <button
        //       key={cores[index].core.serial}
        //       onClick={() => setSelectedBooster(index)}
        //     >
        //       Booster {cores[index].core.serial}
        //     </button>
        //   ))}
        // </div>

        <Switcher
          options={boosterNumbers}
          activeOption={selectedBooster}
          handleClick={setSelectedBooster}
        />
      )}
      <S.Wrapper flexDirection={{ _: "column", lg: "row" }}>
        {console.log(cores)}

        <S.Card>
          <InfoItem
            labelColor={colors.black.medium}
            label="name"
            info={fullName}
          />
          <Image src={images.large[0]} />
          <S.Details>
            <S.Col>
              <Flex>
                <InfoItem
                  labelColor={colors.black.medium}
                  label="location"
                  info={locality}
                />
                <Maps lat={lat} lon={lon} />
              </Flex>
              <InfoItem
                labelColor={colors.black.medium}
                label="region"
                info={region}
              />
              <InfoItem
                labelColor={colors.black.medium}
                label="successful landings"
                info={landingSuccesses}
              />
            </S.Col>
            <S.Col>
              <InfoItem
                labelColor={colors.black.medium}
                label="abbreviation"
                info={name}
              />
              <InfoItem
                labelColor={colors.black.medium}
                label="status"
                info={firstToUpperCase(status)}
              />
              <InfoItem
                labelColor={colors.black.medium}
                label="landing failures"
                info={landingFailures}
              />
            </S.Col>
          </S.Details>
        </S.Card>
        <S.Description>{details}</S.Description>
      </S.Wrapper>
    </Flex>
  );
};
