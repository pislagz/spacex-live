import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import { Box, Flex } from "app/components/common/ui";
import { fontSizes } from "app/styles/theme/texts";
import { mediaQuery } from "app/styles/theme/breakpoints";
import { RedditIcon } from "assets/icons/media/RedditIcon";
import { WikipediaIcon } from "assets/icons/media/WikipediaIcon";
import { YoutubeIcon } from "assets/icons/media/YoutubeIcon";
import { FlickrIcon } from "assets/icons/media/FlickrIcon";
import { LinkIcon } from "assets/icons/media/LinkIcon";
import { TwitterIcon } from "assets/icons/media/TwitterIcon";

export const Wrapper = styled(Flex)``;
Wrapper.defaultProps = {
  flexDirection: "column",
  marginTop: "4px",
  marginBottom: "4px",
  marginLeft: "0",
  marginRight: "0",
};

export const Info = styled(Box).attrs({ as: "p" })`
  margin: 0;
  padding: 0;
  font-size: ${fontSizes.sm};

  ${mediaQuery.md} {
    font-size: ${fontSizes.md};
  }
`;

const tooltipText = {
  spacex: "Official Page",
  flickr: "Official Flickr",
  twitter: "Official Twitter",
  reddit: "Reddit",
  wikipedia: "Wikipedia",
  youtube: "Youtube",
};

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
      data-tip={link ? tooltipText[site] : tooltipText[site] + " Unavailable"}
    >
      {site === "reddit" && <RedditIcon fill={link ? "#fff" : "#4a4a4a"} />}
      {site === "wikipedia" && (
        <WikipediaIcon fill={link ? "#fff" : "#4a4a4a"} />
      )}
      {site === "youtube" && <YoutubeIcon fill={link ? "#fff" : "#4a4a4a"} />}

      {site === "flickr" && <FlickrIcon />}
      {site === "spacex" && <LinkIcon />}
      {site === "twitter" && <TwitterIcon />}
    </Flex>
    <ReactTooltip place="bottom" type="light" effect="solid" />
  </Flex>
);
