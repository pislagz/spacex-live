import React from "react";
import { Flex, Box, Image } from "app/components/common/ui";
import { Info, IconLink, Wrapper } from "./styled";
import { Label } from "app/components/common/Label";
import { Falcon9 } from "assets/icons/falcons/Falcon9";
import { FalconHeavy } from "assets/icons/falcons/FalconHeavy";

//noUpper prop ensures the label isn't text-transformed with uppercase

export const InfoItem = ({
  altPatch,
  patchUrl,
  links,
  info,
  label,
  details,
  noUpper,
  ...props
}) => (
  <Wrapper {...props}>
    <Label noUpper={noUpper}>{label}</Label>
    {info && <Info>{info}</Info>}
    {details && (
      <Box m="0" as="p" fontSize={"xs"} fontWeight={"light"}>
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
        bg="gray.darkTransparent"
        borderRadius="lg"
        width={{ _: "110px", md: "120px", lg: "130px" }}
        height={{ _: "110px", md: "120px", lg: "130px" }}
        p="xs"
        mt="xxs"
        mb="xs"
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
  </Wrapper>
);
