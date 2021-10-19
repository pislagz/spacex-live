import styled from "styled-components";
import { Box, Flex } from "app/components/common/ui";
import { fontSizes } from "app/styles/theme/texts";
import { mediaQuery } from "app/styles/theme/breakpoints";
import { RedditIcon } from "assets/icons/media/RedditIcon";
import { WikipediaIcon } from "assets/icons/media/WikipediaIcon";
import { YoutubeIcon } from "assets/icons/media/YoutubeIcon";

export const Wrapper = styled(Flex)``;
Wrapper.defaultProps = {
  flexDirection: "column",
  margin: "4px 0",
};

export const Info = styled(Box).attrs({ as: "p" })`
  margin: 0;
  padding: 0;
  font-size: ${fontSizes.sm};

  ${mediaQuery.md} {
    font-size: ${fontSizes.md};
  }
`;

export const IconLink = ({ site, link }) => (
  <Flex
    as="ul"
    p="0"
    m="0"
    mr="5px"
    justifyContent="center"
    alignItems="center"
  >
    <Flex
      as={link ? "a" : "div"}
      p="3px"
      href={link}
      target="_blank"
      justifyContent="center"
      alignItems="center"
      style={{ cursor: link ? "pointer" : "not-allowed" }}
    >
      {site === "reddit" && <RedditIcon fill={link ? "#fff" : "#4a4a4a"} />}
      {site === "wikipedia" && (
        <WikipediaIcon fill={link ? "#fff" : "#4a4a4a"} />
      )}
      {site === "youtube" && <YoutubeIcon fill={link ? "#fff" : "#4a4a4a"} />}
    </Flex>
  </Flex>
);
