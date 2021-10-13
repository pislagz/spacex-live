import React, { useState } from "react";
import { MoreLessIcon } from "assets/icons/functional/MoreLessIcon";
import { Wrapper, Content, Text, Activator, IconWrapper } from "./styled";
import { UnmountClosed } from "react-collapse";
import { colors } from "app/styles/theme/colors";

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
        <IconWrapper isDown={revertArrow ? !isCollapsed : isCollapsed}>
          <MoreLessIcon fill={isBlack && colors.black.dark} />
        </IconWrapper>
        <Text color={isBlack && colors.black.dark}>
          {isCollapsed ? more : less}
        </Text>
      </Activator>
    </Wrapper>
  );
};
