import React from "react";
import { Flex, Box, Image } from "app/components/common/ui";
import { Title, Info, IconLink } from "./styled";
import { colors } from "app/styles/theme/colors";
import { sizings } from "app/styles/theme/sizings";
import { Falcon9 } from "assets/icons/falcons/Falcon9";
import { FalconHeavy } from "assets/icons/falcons/FalconHeavy";

export const InfoItem = ({ altPatch, patchUrl, links, info, label }, props) => (
  <Box m="5px 0" {...props}>
    <Title>{label}</Title>
    {info && <Info>{info}</Info>}

    {label === "links" && (
      <Flex
        as="ul"
        listStyle="none"
        m="0"
        p="0"
        minHeight="20px"
        alignItems="center"
      >
        <IconLink site="wikipedia" link={links?.wikipedia} />
        <IconLink site="youtube" link={links?.youtube} />
        <IconLink site="reddit" link={links?.reddit} />
      </Flex>
    )}

    {(patchUrl || altPatch) && (
      <Flex
        justifyContent="center"
        alignItems="center"
        background={colors.gray.dark}
        borderRadius={sizings.radii.md}
        maxWidth={{ _: "110px", lg: "140px" }}
        p="10px"
        mt="5px"
        mb="10px"
      >
        {patchUrl && (
          <Image
            maxWidth="80%"
            maxHeight={{ _: "110px", lg: "160px" }}
            margin="0"
            src={patchUrl}
            alt="Mission patch"
          />
        )}
        {!patchUrl && altPatch === "Falcon 9" ? (
          <Falcon9 />
        ) : !patchUrl && altPatch === "Falcon Heavy" ? (
          <FalconHeavy />
        ) : null}
      </Flex>
    )}
  </Box>
);
