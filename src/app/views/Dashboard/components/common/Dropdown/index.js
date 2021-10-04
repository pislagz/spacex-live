import React, { useState } from "react";
import { MoreLessIcon } from "assets/icons/functional/MoreLessIcon";
import { Wrapper, Content, Text, Activator, IconWrapper } from "./styled";
import { AnimatePresence, motion } from "framer-motion";

export const Dropdown = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Wrapper>
      <motion.div layout>
        <AnimatePresence>
          {!isCollapsed && <Content>{children}</Content>}
        </AnimatePresence>
      </motion.div>
      <Activator onClick={() => setIsCollapsed(!isCollapsed)}>
        <IconWrapper isDown={isCollapsed}>
          <MoreLessIcon />
        </IconWrapper>
        <Text>{isCollapsed ? "more" : "less"}</Text>
      </Activator>
    </Wrapper>
  );
};
