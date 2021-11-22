import React, { useState } from "react";
import * as S from "./styled";
import { Flex } from "app/components/common/ui";
// import { useSelector } from "react-redux";
// import { selectDashboard, selectDashboardSetting } from "app/redux/selectors";
// import { DateTime } from "luxon";
import { Switcher } from "app/components/common/Switcher";
import { Card } from "app/components/common/Modal/components/views/mission/Rocket/components/styled";
import { optionsList, OPTIONS } from "./config";
import { InfoItem } from "app/components/common/InfoItem";

export const Overview = ({ data }) => {
  const {
    description,
    flickr_images: flickrImages,
    name,
    active,
    cost_per_launch: launchCost,
    first_flight: firstFlight,
    country,
    stages,
    boosters,
    company,
    wikipedia,
    height,
    mass,
    engines,
    first_stage: firstStage,
    second_stage: secondStageData,
    payload_weights: payloadWeights,
  } = data;

  const dataChunks = {
    general: {
      name,
      active,
      launchCost,
      firstFlight,
      country,
      stages,
      boosters,
      company,
      wikipedia,
      height,
      mass,
    },
    propulsion: {
      engines,
    },
    firstStage: {
      firstStage,
    },
    secondStage: {
      secondStageData,
      payloadWeights,
    },
  };
  const [currentOption, setCurrentOption] = useState(OPTIONS[0].label);
  // const { temp: tempUnit, windspeed: windUnit } = useSelector(
  //   selectDashboardSetting
  // );

  return (
    <Flex
      width="100%"
      height="100%"
      justifyContent={{ _: "flex-start", lg: "center" }}
      alignItems="center"
      flexDirection={{ _: "column", lg: "row" }}
    >
      <Card
        src={name !== "Falcon 1" ? flickrImages[1] : flickrImages[0]}
      ></Card>

      <Flex
        flexDirection="column"
        marginTop={{ _: "2rem", lg: "unset" }}
        width={{ _: "100%", sm: "90%", md: "80%" }}
        marginLeft={{ _: "unset", lg: "2rem" }}
      >
        <S.Specs
          flexDirection="column"
          borderRadius="md"
          p={{ _: "1rem", md: "2rem" }}
          height={{ _: "unset", lg: "430px" }}
          minHeight={{ _: "430px", lg: "unset" }}
        >
          <Flex marginBottom="sm">
            <InfoItem
              dark
              label="description"
              details={description}
              detailsLineHeight="1.7"
            />
          </Flex>
          <InfoItem dark label="specs" />
          <Flex maxWidth="520px">
            <Switcher
              options={optionsList}
              activeOption={optionsList.indexOf(currentOption)}
              onClick={console.log(currentOption)}
              handleClick={setCurrentOption}
            />
          </Flex>
          <Flex>
            {/* <General data={dataChunks["general"]} /> */}
            {OPTIONS.map(
              ({ label, component: View, short }) =>
                currentOption === label && (
                  <View key={short} data={dataChunks[short]} />
                )
            )}
          </Flex>
        </S.Specs>
      </Flex>
    </Flex>
  );
};
