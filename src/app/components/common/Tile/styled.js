import styled from "styled-components";
import { Flex, Box } from "app/components/common/ui";
import { zIndicies } from "app/styles/theme/zIndicies";
import { colors } from "app/styles/theme/colors";
import { sizings } from "app/styles/theme/sizings";

export const Title = styled(Box).attrs({ as: "h3" })``;
Title.defaultProps = {
  m: "0",
  marginBottom: "0.5rem",
  p: "0",
};

export const Wrapper = styled(Flex).attrs({ as: "article" })`
  color: ${colors.white};
  border-radius: ${sizings.radii.lg};
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: ${zIndicies.content};
`;

Wrapper.defaultProps = {
  m: { _: "0.5rem", md: "0.6rem" },
  p: { _: "1.5rem", md: "1.75rem" },
  width: { _: "90%", sm: "90%", md: "350px", lg: "350px", xl: "420px" },
  maxWidth: { _: "380px", sm: "460px", lg: "unset" },
  minHeight: { _: "unset", md: "338px" },
  position: "relative",
};
