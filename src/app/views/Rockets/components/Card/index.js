import React from "react";
import * as S from "./styled";

export const Card = ({ src, children, ...props }) => (
  <S.Card src={src} {...props}>
    {children}
  </S.Card>
);
