import React from "react";
import { Flex, Box, Image } from "app/components/common/ui";
import { Info, IconLink } from "./styled";
import { Label } from "app/components/common/Label";
import { Falcon9 } from "assets/icons/falcons/Falcon9";
import { FalconHeavy } from "assets/icons/falcons/FalconHeavy";
import { fontWeights } from "app/styles/theme/texts";
import { fontSizes } from "app/styles/theme/texts";

export const InfoItem = (
  { altPatch, patchUrl, links, info, label, details },
  props
) => (
  <Box m="5px 0" {...props}>
    <Label>{label}</Label>
    {info && <Info>{info}</Info>}
    {details && (
      <Box
        m="0"
        as="p"
        fontSize={fontSizes.xs}
        fontWeight={fontWeights.light}
        width="100%">
        {details}
      </Box>
    )}

    {label === "links" && (
      <Flex
        as="ul"
        listStyle="none"
        m="0"
        p="0"
        minHeight="20px"
        alignItems="center">
        <IconLink site="wikipedia" link={links?.wikipedia} />
        <IconLink site="youtube" link={links?.youtube} />
        <IconLink site="reddit" link={links?.reddit} />
      </Flex>
    )}

    {(patchUrl || altPatch) && (
      <Flex
        justifyContent="center"
        alignItems="center"
        bg="gray.dark"
        borderRadius="md"
        width="100px"
        height="100px"
        p="xs"
        mt="xxs"
        mb="xs">
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
