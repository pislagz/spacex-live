import React from "react";
import * as S from "./styled.js";

export const Switcher = ({ options, activeOption, handleClick }) => (
  <S.Switch>
    {options.map((option, index) => (
      <S.Item
        key={option.name || option}
        isActive={activeOption === index}
        onClick={
          option.name ? () => handleClick(index) : () => handleClick(option)
        }
        itemsCount={options.length}
      >
        {option.name || option}
      </S.Item>
    ))}
  </S.Switch>
);
