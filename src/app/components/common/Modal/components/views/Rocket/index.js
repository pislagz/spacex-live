import React from "react";
import * as S from "./styled";
import { Wrapper } from "app/components/common/Modal/components/common/Wrapper";

export const Rocket = () => {
  return (
    <Wrapper flexDirection={{ _: "column", lg: "row" }}>
      <S.Card>x</S.Card> <S.Card>d</S.Card>
    </Wrapper>
  );
};
