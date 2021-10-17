import React from "react";
import S from "./styled";
import { selectUnit } from "app/redux/selectors";
import { setUnit } from "app/redux/reducers/unitReducer";
import { useDispatch, useSelector } from "react-redux";
import { UNITS } from "app/redux/reducers/unitReducer";

export const UnitSwitcher = () => {
  const units = useSelector(selectUnit);
  const dispatch = useDispatch();
  const handleUnitChange = (param, unit) =>
    dispatch(setUnit({ param: param, unit: unit }));
  console.log(units);

  return (
    <>
      Temperature
      <S.Switch mb="1rem" mt="0.25rem">
        <S.Item
          isActive={units.temp === UNITS.temp.celsius}
          onClick={() => handleUnitChange("temp", UNITS.temp.celsius)}
        >
          °C
        </S.Item>
        <S.Item
          isActive={units.temp === UNITS.temp.fahrenheit}
          onClick={() => handleUnitChange("temp", UNITS.temp.fahrenheit)}
        >
          °F
        </S.Item>
      </S.Switch>
      Windspeed
      <S.Switch mb="1rem" mt="0.25rem">
        <S.Item
          isActive={units.windspeed === UNITS.windspeed.ms}
          onClick={() => handleUnitChange("windspeed", UNITS.windspeed.ms)}
        >
          m/s
        </S.Item>
        <S.Item
          isActive={units.windspeed === UNITS.windspeed.kt}
          onClick={() => handleUnitChange("windspeed", UNITS.windspeed.kt)}
        >
          kt
        </S.Item>
      </S.Switch>
    </>
  );
};
