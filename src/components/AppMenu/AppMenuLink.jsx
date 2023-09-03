import styled from "styled-components";

import { NavLink } from "react-router-dom";

import { colors } from "../../style";

const AppMenuLink = styled(NavLink).attrs(() => ({
  activeStyle: { fontWeight: 700 },
}))`
  font-weight: 200;
  color: ${colors.darkBlack};
  text-decoration: none;

  &:after {
    display: block;
    content: attr(content);
    font-weight: bold;
    height: 1px;
    color: transparent;
    overflow: hidden;
    visibility: hidden;
  }
`;

export { AppMenuLink };
