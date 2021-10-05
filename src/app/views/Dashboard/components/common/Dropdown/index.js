import React, { useState } from "react";
import { MoreLessIcon } from "assets/icons/functional/MoreLessIcon";
import { Wrapper, Content, Text, Activator, IconWrapper } from "./styled";
import { Collapse } from "react-collapse";

export const Dropdown = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Wrapper>
      <Collapse isOpened={!isCollapsed}>
        <Content>{children}</Content>
      </Collapse>
      <Activator onClick={() => setIsCollapsed(!isCollapsed)}>
        <IconWrapper isDown={isCollapsed}>
          <MoreLessIcon />
        </IconWrapper>
        <Text>{isCollapsed ? "more" : "less"}</Text>
      </Activator>
    </Wrapper>
  );
};
