import React from "react";
import { Flex } from "app/components/common/ui";
import { S, Nav } from "./styled";
import { firstToUpperCase } from "app/utils/textFormatting";
import { useDispatch } from "react-redux";
import { changeModalType, closeModal } from "app/redux/slices/modalSlice";
import { useWindowSize } from "app/hooks/useWindowSize";
import { CloseIcon } from "assets/icons/functional/CloseIcon";

export const Topbar = ({ name, list, type }) => {
  const dispatch = useDispatch();
  const { width } = useWindowSize();

  return width > 768 ? (
    <S.Wrapper>
      <Flex>
        <S.Title>
          {name}
          {" | "}
          <Flex marginRight="xs" />
        </S.Title>
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
        <S.CloseIconWrapper onClick={() => dispatch(closeModal())}>
          <CloseIcon />
        </S.CloseIconWrapper>
      </Flex>
    </S.Wrapper>
  ) : (
    <S.Wrapper>
      <Flex>
        <S.Title>
          {name}
          {" | "}
          <Flex marginRight="xs" />
          {type && firstToUpperCase(type)}
        </S.Title>
        <S.CloseIconWrapper onClick={() => dispatch(closeModal())}>
          <CloseIcon />
        </S.CloseIconWrapper>
      </Flex>
    </S.Wrapper>
  );
};
