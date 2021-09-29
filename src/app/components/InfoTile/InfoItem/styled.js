import styled from "styled-components";
import { Box, Flex } from "app/components/common/ui";
import { colors } from "app/styles/theme/colors";
import { fontSizes, fontWeights } from "app/styles/theme/texts";
import { mediaQuery } from "app/styles/theme/breakpoints";
import { RedditIcon } from "assets/icons/RedditIcon";
import { WikipediaIcon } from "assets/icons/WikipediaIcon";
import { YoutubeIcon } from "assets/icons/YoutubeIcon";

export const Title = styled(Box).attrs({ as: "h4" })`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  color: ${colors.gray.mediumDark};
  font-weight: ${fontWeights.normal};
  font-size: ${fontSizes.xs};

  ${mediaQuery.md} {
    font-size: ${fontSizes.xs};
  }
`;

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
      as="a"
      href={link}
      target="_blank"
      justifyContent="center"
      alignItems="center"
    >
      {site === "reddit" && <RedditIcon />}
      {site === "wikipedia" && <WikipediaIcon />}
      {site === "youtube" && <YoutubeIcon />}
    </Flex>
  </Flex>
);
