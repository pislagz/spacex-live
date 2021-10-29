import styled from "styled-components";
import { Flex, Image } from "app/components/common/ui";
import { WikipediaIcon } from "assets/icons/media/WikipediaIcon";
import { Button } from "app/components/common/ui/Button";
import { colors } from "app/styles/theme/colors";
import { mediaQuery } from "app/styles/theme/breakpoints";

const PicWrapper = styled(Flex).attrs({ borderRadius: "lg" })`
  height: 170px;
  width: 130px;
  overflow: hidden;
  justify-content: center;
  margin-right: 1rem;
  img {
    height: 100%;
  }
`;

const Photo = ({ src }) => (
  <PicWrapper>
    <Image src={src} />
  </PicWrapper>
);

const WikiButton = ({ link }) => (
  <Button
    as="a"
    tabIndex="0"
    style={{ position: "absolute", right: "0", bottom: "0" }}
    target="_blank"
    href={link}
  >
    <WikipediaIcon fill={colors.black.dark} />
  </Button>
);

export const S = {
  Wrapper: styled(Flex).attrs({
    as: "ul",
    m: "0",
    p: "0",
  })`
    flex-direction: column;
    ${mediaQuery.md} {
      flex-direction: row;
    }
  `,
  Tile: styled(Flex).attrs({
    as: "article",
    m: "0",
    p: "0",
    borderRadius: "lg",
  })`
    padding: 1rem;
    margin: 0.5rem;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);

    ${mediaQuery.md} {
      flex-direction: column;
    }
  `,
  Photo: Photo,
  WikiButton: WikiButton,
  Info: styled(Flex).attrs({
    as: "ul",
    m: "0",
    p: "0",
    flexDirection: "column",
    position: "relative",
    width: "55%",
  })``,
};
S.Info.defaultProps = {
  justifyContent: "space-between",
};
