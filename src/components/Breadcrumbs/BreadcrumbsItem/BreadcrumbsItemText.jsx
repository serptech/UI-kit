import styled from "styled-components";

import { NavLink } from "react-router-dom";

import { colors } from "../../../style";

const BreadcrumbsItemText = styled.span.attrs(
  ({ to }) => to && { as: NavLink }
)`
  font-size: 16px;
  line-height: 26px;
  font-weight: 300;
  color: ${colors.darkBlack};
  text-decoration: none;
`;

export { BreadcrumbsItemText };
