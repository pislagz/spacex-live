import * as S from "./styled";

export const Tile = ({ children, ...props }) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
);
