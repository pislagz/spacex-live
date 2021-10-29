import React from "react";
import { InfoItem } from "app/components/common/InfoItem";
import { S } from "./styled";
import { firstToUpperCase } from "app/utils/textFormatting";
import { colors } from "app/styles/theme/colors";

export const Crew = ({ crew }) => {
  const array = Object.values(crew);

  return (
    <S.Wrapper>
      {array.map(({ crew, role }) => (
        <S.Tile key={crew.name}>
          <S.Photo src={crew.image} />
          <S.Info>
            <InfoItem
              as="li"
              labelColor={colors.black.medium}
              label="name"
              info={crew.name}
            />
            <InfoItem
              as="li"
              labelColor={colors.black.medium}
              label="role"
              info={role}
            />
            <InfoItem
              as="li"
              labelColor={colors.black.medium}
              label="agency"
              info={crew.agency}
            />
            <InfoItem
              as="li"
              labelColor={colors.black.medium}
              label="career status"
              info={firstToUpperCase(crew.status)}
            />
            {crew?.wikipedia && <S.WikiButton link={crew.wikipedia} />}
          </S.Info>
        </S.Tile>
      ))}
    </S.Wrapper>
  );
};
