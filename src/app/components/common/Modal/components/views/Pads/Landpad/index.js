import React, { useState } from "react";
import * as S from "../styled";
import { InfoItem } from "app/components/common/InfoItem";
import { colors } from "app/styles/theme/colors";
import { Flex } from "app/components/common/ui";
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
    <S.Wrapper
      justifyContent={{ _: "flex-start", lg: "center" }}
      alignItems="center"
      flexDirection={{ _: "column", lg: "row" }}
    >
      {console.log(cores)}

      <S.Card position="relative">
        <Flex flexDirection="column">
          {type.includes("landpad") && (
            <>
              <InfoItem labelColor={colors.gray.mediumDark} label="booster" />
              <Switcher
                options={boosterNumbers}
                activeOption={selectedBooster}
                handleClick={setSelectedBooster}
              />
            </>
          )}
          <InfoItem
            labelColor={colors.gray.mediumDark}
            label="landpad"
            marginBottom="1rem"
          />
          <Flex>
            <S.PhotoWrapper src={images.large[0]}>
              <InfoItem
                marginTop="auto"
                color="white"
                label="name"
                info={fullName}
                marginBottom="1rem"
              />
            </S.PhotoWrapper>
          </Flex>
          <Flex marginTop="1rem" height="100%">
            <S.Col marginRight="sm">
              <Flex>
                <InfoItem
                  labelColor={colors.gray.mediumDark}
                  label="location"
                  info={locality}
                />
              </Flex>
              <InfoItem
                labelColor={colors.gray.mediumDark}
                label="region"
                info={region}
              />
            </S.Col>
            <S.Col marginRight="sm">
              <InfoItem
                labelColor={colors.gray.mediumDark}
                label="status"
                info={firstToUpperCase(status)}
              />

              <InfoItem
                labelColor={colors.gray.mediumDark}
                label="abbreviation"
                info={name}
              />
            </S.Col>
            <S.Col>
              <InfoItem
                labelColor={colors.gray.mediumDark}
                label="landings"
                info={landingSuccesses}
              />
              <InfoItem
                labelColor={colors.gray.mediumDark}
                label="land fails"
                info={landingFailures}
              />
            </S.Col>
          </Flex>
        </Flex>
        <Flex position="absolute" right="20px" bottom="20px">
          <Maps lat={lat} lon={lon} />
        </Flex>
      </S.Card>
      <Flex
        flexDirection="column"
        marginLeft={{ _: "unset", lg: "2rem" }}
        marginTop={{ _: "2rem", lg: "unset" }}
        width={{ _: "100%", sm: "90%", md: "80%" }}
      >
        <InfoItem
          labelColor={colors.gray.mediumDark}
          label="description"
          details={details}
          detailsLineHeight="28px"
        />
      </Flex>
    </S.Wrapper>
  );
};
