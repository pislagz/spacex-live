import React from "react";
import * as S from "./styled";
import { InfoItem } from "app/components/common/InfoItem";
import { firstToUpperCase } from "app/utils/textFormatting";
import { colors } from "app/styles/theme/colors";

export const Capsule = ({ capsule }) => {
  const {
    land_landings: landLandings,
    last_update: lastUpdate,
    reuse_count: reuseCount,
    water_landings: waterLandings,
    launches,
    serial,
    status,
    type,
  } = capsule;

  const data = [
    { label: "type", info: type },
    { label: "serial number", info: serial },
    { label: "reuse count", info: reuseCount },
    { label: "launches", info: launches.length },
    { label: "land landings", info: landLandings },
    { label: "ocean splashdowns", info: waterLandings },
    { label: "status", info: firstToUpperCase(status) },
    { label: "last update", info: lastUpdate },
  ];

  return (
    <S.Card>
      <S.Info>
        {data.map((it) => (
          <InfoItem
            key={it.label}
            label={it.label}
            info={it.info}
            labelColor={colors.gray.mediumDark}
          />
        ))}
      </S.Info>
      <S.Picture />
    </S.Card>
  );
};
