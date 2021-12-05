import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageVariantsAnim } from "app/styles/animations";
import { Flex } from "app/components/common/ui";
import { showDate } from "app/utils/parseDate";
import { useSelector } from "react-redux";
import { selectDashboardSetting } from "app/redux/selectors";
import { InfoItem } from "app/components/common/InfoItem";
import { CloseIcon } from "assets/icons/functional/CloseIcon";
import { radii } from "app/styles/theme/sizings";

const unknown = "To be added";

export const SatInfo = React.memo(({ starlink, close }) => {
  const {
    label,
    version,
    height_km: altitude,
    velocity_kms: velocity,
    launch,
  } = starlink || {};

  const { name, date_utc: dateUTC, flight_number: flightNumber } = launch || {};
  const { timezone } = useSelector(selectDashboardSetting);
  const data = [
    {
      label: "flight",
      info: `${flightNumber ? "#" + flightNumber : ""} ${name || unknown}`,
    },
    { label: "starlink version", info: version },
    { label: "altitude", info: altitude.toFixed(2) + " km" },
    { label: "velocity", info: velocity.toFixed(2) + " km/s" },
    {
      label: "launch date",
      info: dateUTC ? showDate(dateUTC, "day", timezone) : unknown,
    },
  ];

  return (
    <Wrapper
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariantsAnim}
    >
      <Flex flexDirection="column">
        <Flex
          bg="rgba(255, 255, 255, 0.5)"
          p="xs"
          onClick={close}
          style={{
            cursor: "pointer",
            borderTopLeftRadius: radii.lg,
            borderTopRightRadius: radii.lg,
            color: "black",
          }}
          width="100%"
        >
          <InfoItem info={label} />
          <Flex ml="auto" alignItems="center">
            <CloseIcon fill="black" />
          </Flex>
        </Flex>

        <Flex p="xs">
          <Flex flexDirection="column">
            {data.map(({ info, label }) => (
              <InfoItem
                info={info || unknown}
                label={label}
                key={info}
                width="200px"
                alignItems="center"
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Wrapper>
  );
});

const Wrapper = styled(Flex).attrs({ as: motion.div })`
  align-items: flex-start;
  position: absolute;
  z-index: 100;
  bottom: 0;
  right: 0;
  width: auto;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  border-radius: ${radii.lg};
`;
