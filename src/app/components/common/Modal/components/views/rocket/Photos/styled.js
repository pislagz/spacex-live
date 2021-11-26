import { Button } from "app/components/common/ui/Button";
import styled from "styled-components";
import { MoreLessIcon } from "assets/icons/functional/MoreLessIcon";
import { colors } from "app/styles/theme/colors";
import { Flex, Image } from "app/components/common/ui";
import { radii } from "app/styles/theme/sizings";
import { shadows } from "app/styles/theme/shadows";
import { mediaQuery } from "app/styles/theme/breakpoints";

const ArrowWrapper = styled(Flex)`
  transform: ${({ isLeft }) => (isLeft ? "rotate(180deg)" : "")};
  margin: 5px;
`;

export const Arrow = ({ ...props }) => (
  <ArrowWrapper {...props}>
    <Button>
      <MoreLessIcon fill={colors.black.dark} size="40" />
    </Button>
  </ArrowWrapper>
);

export const Photo = styled(Image)`
  box-shadow: ${shadows.medium};
  border-radius: ${radii.lg};
  max-width: 80%;

  ${mediaQuery.lg} {
    height: 480px;
    width: 774px;
  }
`;
