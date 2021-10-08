import React, { useState } from "react";
import { MoreLessIcon } from "assets/icons/functional/MoreLessIcon";
import { Wrapper, Content, Text, Activator, IconWrapper } from "./styled";
import { UnmountClosed } from "react-collapse";

export const Dropdown = ({
  children,
  more = "more",
  less = "less",
  isBlack,
  revertArrow,
  ...props
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Wrapper {...props}>
      <UnmountClosed isOpened={!isCollapsed}>
        <Content>{children}</Content>
      </UnmountClosed>
      <Activator onClick={() => setIsCollapsed(!isCollapsed)}>
        <IconWrapper isDown={isCollapsed}>
          <MoreLessIcon fill={isBlack && "#000"} />
        </IconWrapper>
        <Text color={isBlack && "#000"}>{isCollapsed ? more : less}</Text>
      </Activator>
    </Wrapper>
  );
};
