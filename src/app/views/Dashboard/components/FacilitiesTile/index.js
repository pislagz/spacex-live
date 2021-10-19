import React from "react";
import { Tile } from "app/components/common/Tile";
import { Facility } from "app/views/Dashboard/components/FacilitiesTile/Facility";
import { Dropdown } from "app/components/common/Dropdown";
import { pics } from "app/views/Dashboard/components/FacilitiesTile/Facility/links";

export const FacilitiesTile = ({ title, data }) => (
  <Tile title={title}>
    <Facility
      name="Cape Canaveral"
      label="LC-39A & SLC-40"
      image={pics.canaveral}
      data={data?.canaveral}
      region="Florida"
      marginTop="0"
    />
    <Facility
      name="Starbase Boca Chica"
      label="Starship Launch Facility"
      image={pics.starbase}
      data={data?.starbase}
      region="Texas"
    />
    <Dropdown>
      <Facility
        name="Vandenerg Base"
        label="USSF SLC-4E"
        image={pics.vandenberg}
        data={data?.vandenberg}
        region="California"
      />
    </Dropdown>
  </Tile>
);
