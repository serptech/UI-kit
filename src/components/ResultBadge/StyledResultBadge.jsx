import styled from "styled-components";
import theme from "styled-theming";

import { UIBadge } from "../UIBadge";

import { colors } from "../../style";

const color = theme("mode", {
  new: colors.navyBlue,
  reinit: colors.darkBlue,
  exact: colors.lightGreen,
  ha: colors.lightYellow,
  junk: colors.lightRed,
  nm: colors.gray,
  det: colors.slate,
  accepted: colors.green,
  denied: colors.red,
});

const StyledResultBadge = styled(UIBadge).attrs(() => ({ color }))``;

export { StyledResultBadge };
