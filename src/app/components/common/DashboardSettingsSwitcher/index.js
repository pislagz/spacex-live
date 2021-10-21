import React from "react";
import S from "./styled";
import { selectDashboardSetting } from "app/redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setSetting } from "app/redux/reducers/dashboardSettingsReducer";
import { SETTINGS } from "app/constants/settings";

export const DashboardSettingsSwitcher = () => {
  const settings = useSelector(selectDashboardSetting);
  const dispatch = useDispatch();
  const handleSettingChange = (param, setting) => {
    dispatch(setSetting({ param: param, setting: setting }));

    localStorage.setItem(`${param}Saved`, setting);
  };

  return (
    <>
      Time
      <S.Switch>
        <S.Item
          isActive={settings.timezone === SETTINGS.dashboard.timezone.utc}
          onClick={() =>
            handleSettingChange("timezone", SETTINGS.dashboard.timezone.utc)
          }
        >
          UTC
        </S.Item>
        <S.Item
          isActive={settings.timezone === SETTINGS.dashboard.timezone.local}
          onClick={() =>
            handleSettingChange("timezone", SETTINGS.dashboard.timezone.local)
          }
        >
          Local
        </S.Item>
      </S.Switch>
      Temperature
      <S.Switch>
        <S.Item
          isActive={settings.temp === SETTINGS.dashboard.temp.celsius}
          onClick={() =>
            handleSettingChange("temp", SETTINGS.dashboard.temp.celsius)
          }
        >
          °C
        </S.Item>
        <S.Item
          isActive={settings.temp === SETTINGS.dashboard.temp.fahrenheit}
          onClick={() =>
            handleSettingChange("temp", SETTINGS.dashboard.temp.fahrenheit)
          }
        >
          °F
        </S.Item>
      </S.Switch>
      Windspeed
      <S.Switch>
        <S.Item
          isActive={settings.windspeed === SETTINGS.dashboard.windspeed.ms}
          onClick={() =>
            handleSettingChange("windspeed", SETTINGS.dashboard.windspeed.ms)
          }
        >
          m/s
        </S.Item>
        <S.Item
          isActive={settings.windspeed === SETTINGS.dashboard.windspeed.kt}
          onClick={() =>
            handleSettingChange("windspeed", SETTINGS.dashboard.windspeed.kt)
          }
        >
          kt
        </S.Item>
      </S.Switch>
    </>
  );
};
