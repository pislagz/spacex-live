import React, { useState } from "react";
import { MoreLessIcon } from "assets/icons/functional/MoreLessIcon";
import { Wrapper, Content, Text, Activator, IconWrapper } from "./styled";
import { AnimatePresence, motion } from "framer-motion";
import { Box } from "app/components/common/ui";

export const Dropdown = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Wrapper>
      <Box as={motion.div} layout>
        <AnimatePresence>
          {!isCollapsed && <Content as={motion.div}>{children}</Content>}
        </AnimatePresence>
      </Box>
      <Activator onClick={() => setIsCollapsed(!isCollapsed)}>
        <IconWrapper isDown={isCollapsed}>
          <MoreLessIcon />
        </IconWrapper>
        <Text>{isCollapsed ? "more" : "less"}</Text>
      </Activator>
    </Wrapper>
  );
};
