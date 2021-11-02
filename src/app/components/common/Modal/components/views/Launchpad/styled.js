import styled from "styled-components";
import { Flex } from "app/components/common/ui";

export const S = {
  Wrapper: styled(Flex)`
    width: 100%;
  `,
  Card: styled(Flex).attrs({ as: "article", flexDirection: "column" })`
    img {
      max-width: 500px;
    }
  `,
  Details: styled(Flex)``,
  Col: styled(Flex)`
    flex-direction: column;
  `,
  Description: styled(Flex).attrs({ as: "article" })``,
};

S.Card.defaultProps = {
  margin: "0",
  padding: "0",
};

S.Description.defaultProps = {
  margin: "0",
  padding: "0",
};
