import React from "react";
import { S } from "./styled";

export const UnitSwitcher = () => (
  <>
    Temperature
    <S.Switch mb="1rem" mt="0.25rem">
      <S.Item>°C</S.Item>
      <S.Item>°F</S.Item>
    </S.Switch>
    Windspeed
    <S.Switch mb="1rem" mt="0.25rem">
      <S.Item>m/s</S.Item>
      <S.Item>kts</S.Item>
    </S.Switch>
  </>
);
