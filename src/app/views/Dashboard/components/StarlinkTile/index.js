import React, { useState } from "react";
import { Tile } from "app/components/common/Tile";
import styled from "styled-components";
import { Flex, Text } from "app/components/common/ui";
import { Satellite } from "assets/icons/buttons/Satellite";
import { colors } from "app/styles/theme/colors";

export const StarlinkTile = ({ title, count }) => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <Tile title={title}>
      <Wrapper>
        <IconWrapper as="button" onClick={() => setClickCount(clickCount + 1)}>
          <Satellite
            fill={"rgba(255,255,255,0.4)"}
            lightColor={
              clickCount < 3
                ? colors.blinkingLight.on
                : clickCount < 9
                ? colors.blinkingLight.alert
                : colors.blinkingLight.off
            }
          />
        </IconWrapper>
        <Text as="p" m="0" textAlign="center" style={{ userSelect: "none" }}>
          There are currently {count} active Starlink satellites on the low
          Earth orbit.
        </Text>
      </Wrapper>
    </Tile>
  );
};

const Wrapper = styled(Flex)`
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled(Flex)`
  background: none;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  width: 170px;
  height: 170px;
  justify-content: center;
  align-items: center;

  svg {
    transition: 0.1s ease-in-out;

    &:hover {
      width: 160px;
      height: 160px;
    }

    &:active {
      transform: rotate(10deg);
    }
  }
`;
