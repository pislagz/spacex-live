import styled from "styled-components";
import { Flex, Image } from "app/components/common/ui";
import { radii } from "app/styles/theme/sizings";

export const Card = styled(Flex)``;
export const Info = styled(Flex)`
  flex-direction: column;
`;

const PictureWrapper = styled(Flex)`
  img {
    height: 300px;
    border-radius: ${radii.lg};
  }
`;

export const Picture = () => (
  <PictureWrapper>
    <Image src="https://live.staticflickr.com/1602/24159153709_e480e05061_k.jpg" />
  </PictureWrapper>
);
