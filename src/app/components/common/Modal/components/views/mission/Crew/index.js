import React from "react";
import { InfoItem } from "app/components/common/InfoItem";
import { S } from "./styled";
import { firstToUpperCase } from "app/utils/textFormatting";
import { animationProps } from "app/styles/animations";

const labels = ["name", "role", "agency", "career status"];

export const Crew = ({ crew }) => {
  return (
    <S.Wrapper {...animationProps}>
      {crew.map(({ crew, role }) => (
        <S.Tile key={crew.name}>
          <S.Photo src={crew.image} />
          <S.Info>
            {labels.map((label) => (
              <InfoItem
                key={label}
                as="li"
                dark
                label={label}
                info={
                  label === "name"
                    ? crew.name
                    : label === "role"
                    ? role
                    : label === "agency"
                    ? crew.agency
                    : firstToUpperCase(crew.status)
                }
              />
            ))}
          </S.Info>
          {crew?.wikipedia && <S.WikiButton link={crew.wikipedia} />}
        </S.Tile>
      ))}
    </S.Wrapper>
  );
};
