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
    height: 115%;
  }

  //handle InfoItems fontsizes
  ${mediaQuery.md} {
    height: 180px;
  }
  ${mediaQuery.lg} {
    margin: 0;
    min-height: 55%;
    width: 100%;
  }
  /* ${mediaQuery.xl} {
    margin: 0;
    height: 55%;
    min-height: 216px;
    width: 100%;
  } */
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
    style={{ position: "absolute", right: "10px", bottom: "10px" }}
    target="_blank"
    href={link}
  >
    <WikipediaIcon fill={colors.black.dark} />
  </Button>
);

export const S = {
  Wrapper: styled(Flex).attrs({
    m: "0",
    p: "0",
  })`
    flex-direction: column;
    width: 100%;
    height: 100%;

    ${mediaQuery.md} {
      align-items: center;
    }
    ${mediaQuery.lg} {
      align-items: flex-start;
      justify-content: space-around;
      flex-direction: row;
      padding: 1rem;
      overflow-y: auto;
    }
  `,
  Tile: styled(Flex).attrs({
    as: "article",
    m: "0",
    borderRadius: "lg",
    position: "relative",
  })`
    padding: 1rem;
    margin: 0.5rem;
    width: 95%;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    min-height: 220px;

    ${mediaQuery.md} {
      width: 70%;
    }

    ${mediaQuery.lg} {
      margin: auto 0;
      flex-direction: column;
      min-width: 200px;
      width: 23%;
      max-width: 234px;
      min-height: 430px;
      height: 95%;
      max-height: 500px;
      padding: 1.5rem;
    }
    /* 
    ${mediaQuery.xl} {
      flex-direction: column;
      min-width: 220px;
      width: 23%;
      max-width: 234px;
      min-height: 457px;
      height: 100%;
      max-height: 500px;
      padding: 1.5rem;
    } */
  `,
  Photo: Photo,
  WikiButton: WikiButton,
  Info: styled(Flex).attrs({
    as: "ul",
    m: "0",
    p: "0",
    flexDirection: "column",
  })`
    width: 55%;
    ${mediaQuery.lg} {
      margin-top: 1rem;
      margin-bottom: auto;
      width: 100%;
    }
  `,
};
S.Info.defaultProps = {
  justifyContent: "space-between",
};
