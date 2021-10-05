import React, { useState } from "react";
import { MoreLessIcon } from "assets/icons/functional/MoreLessIcon";
import { Wrapper, Content, Text, Activator, IconWrapper } from "./styled";
import { UnmountClosed } from "react-collapse";

export const Dropdown = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Wrapper>
      <UnmountClosed isOpened={!isCollapsed}>
        <Content>{children}</Content>
      </UnmountClosed>
      <Activator onClick={() => setIsCollapsed(!isCollapsed)}>
        <IconWrapper isDown={isCollapsed}>
          <MoreLessIcon />
        </IconWrapper>
        <Text>{isCollapsed ? "more" : "less"}</Text>
      </Activator>
    </Wrapper>
  );
};
