import React, { useState } from "react";
import { Flex } from "app/components/common/ui";
import { S, Nav } from "./styled";
import { firstToUpperCase } from "app/utils/textFormatting";
import { useDispatch } from "react-redux";
import { changeModalType } from "app/redux/slices/modalSlice";
import { useWindowSize } from "app/hooks/useWindowSize";
import { UnmountClosed } from "react-collapse";

export const Topbar = ({ name, list, type }) => {
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  const [isModalMenuOpen, setIsModalMenuOpen] = useState(false);

  return width > 620 ? (
    <S.Wrapper>
      <Flex>
        {name}
        {" | "}
        <Nav.Wrapper>
          {list.map((route) => (
            <Nav.Route
              key={route}
              isActive={type === route}
              onClick={() => dispatch(changeModalType({ type: route }))}
            >
              {firstToUpperCase(route)}
            </Nav.Route>
          ))}
        </Nav.Wrapper>
      </Flex>
    </S.Wrapper>
  ) : (
    <S.Wrapper>
      <Flex>
        {name}
        {" | "}
        <Nav.Wrapper>
          <Nav.Route
            isActive
            onClick={() => setIsModalMenuOpen(!isModalMenuOpen)}
          >
            {type && firstToUpperCase(type)}
          </Nav.Route>
        </Nav.Wrapper>
      </Flex>
      <UnmountClosed isOpened={isModalMenuOpen}>
        {list
          .filter((route) => route !== type)
          .map((route) => (
            <div
              key={route}
              onClick={() => {
                dispatch(changeModalType({ type: route }));
                setIsModalMenuOpen(false);
              }}
            >
              {firstToUpperCase(route)}
              <br />
            </div>
          ))}
      </UnmountClosed>
    </S.Wrapper>

    //dropdown somewhere here
  );
};
