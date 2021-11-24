import React from "react";
import { Tile } from "app/components/common/Tile";
import { Facility } from "app/views/Dashboard/components/FacilitiesTile/Facility";
import { Dropdown } from "app/components/common/Dropdown";
import { pics } from "app/views/Dashboard/components/FacilitiesTile/Facility/links";
import { useSelector } from "react-redux";
import { selectWeather } from "app/redux/selectors";

export const FacilitiesTile = ({ title, data }) => {
  const { weather } = useSelector(selectWeather);

  return (
    <Tile title={title}>
      <Facility
        name="Cape Canaveral"
        label="LC-39A & SLC-40"
        image={pics.canaveral}
        data={weather.canaveral}
        region="Florida"
        marginTop="0"
      />
      <Facility
        name="Starbase Boca Chica"
        label="Starship Launch Facility"
        image={pics.starbase}
        data={weather.starbase}
        region="Texas"
      />
      <Dropdown activatorMarginTop="xs">
        <Facility
          name="Vandenerg Base"
          label="USSF SLC-4E"
          image={pics.vandenberg}
          data={weather.vandenberg}
          region="California"
        />
      </Dropdown>
    </Tile>
  );
};
