import React from "react";
import * as S from "./styled.js";

export const Switcher = ({ options, activeOption, handleClick }) => (
  <S.Switch>
    {options.map((option, index) => (
      <S.Item
        key={option.name}
        isActive={activeOption === index}
        onClick={() => handleClick(index)}
        itemsCount={options.length}
      >
        {option.name}
      </S.Item>
    ))}
  </S.Switch>
);
