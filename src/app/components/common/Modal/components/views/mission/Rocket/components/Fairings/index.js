import React from "react";
import * as S from "../styled";
import { Box, Flex } from "app/components/common/ui";
import { links } from "../links.js";
import { InfoItem } from "app/components/common/InfoItem";
import { colors } from "app/styles/theme/colors";

export const Fairings = ({ fairings }) => {
  const reused = fairings.reused;
  const recoveryAttempt = fairings.recovery_attempt;
  const recovered = fairings.recovered;

  return (
    <>
      <Box as="p" m="0" p="0" fontSize="md">
        Fairings
      </Box>
      <S.Card src={links.fairings}>
        <Flex flexDirection="column">
          {reused === null ? null : (
            <InfoItem
              color={colors.white}
              label="condition"
              info={reused ? "Reused" : "New"}
            />
          )}

          <InfoItem
            color={colors.white}
            label="recovery"
            info={
              recoveryAttempt === null
                ? "No recovery data"
                : recoveryAttempt
                ? recovered
                  ? "Fairings recovered"
                  : "Fairings to be recovered"
                : "No recovery attempt"
            }
          />
        </Flex>
      </S.Card>
    </>
  );
};
