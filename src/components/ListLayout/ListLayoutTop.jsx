import styled from "styled-components";

import { ListStickyHeader } from "../ListStickyHeader";

import { colors } from "../../style";

const ListLayoutTop = styled.div.attrs(
  ({ isSticky }) => isSticky && { as: ListStickyHeader }
)`
  padding-bottom: 24px;
  background-color: ${colors.whiteSimple};
`;

export { ListLayoutTop };
