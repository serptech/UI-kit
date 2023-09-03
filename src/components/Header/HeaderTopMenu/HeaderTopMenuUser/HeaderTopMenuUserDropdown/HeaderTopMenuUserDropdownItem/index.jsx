import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { HeaderTopMenuUserDropdownItemAction } from "./HeaderTopMenuUserDropdownItemAction";
import { HeaderTopMenuUserDropdownItemIcon } from "./HeaderTopMenuUserDropdownItemIcon";
import { HeaderTopMenuUserDropdownItemText } from "./HeaderTopMenuUserDropdownItemText";
import { HeaderTopMenuUserDropdownItemMenu } from "./HeaderTopMenuUserDropdownItemMenu";
import { NavLink } from "react-router-dom";

import { colors, Clickable } from "../../../../../../style";

const StyledHeaderTopMenuUserDropdownItem = styled.li`
  ${Clickable}
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  line-height: 24px;
  text-decoration: none;
  color: ${colors.darkBlack};
`;

function HeaderTopMenuUserDropdownItem(props) {
  return props.to ? (
    <li>
      <StyledHeaderTopMenuUserDropdownItem as={NavLink} {...props} />
    </li>
  ) : (
    <StyledHeaderTopMenuUserDropdownItem {...props} />
  );
}

HeaderTopMenuUserDropdownItem.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

HeaderTopMenuUserDropdownItem.Action = HeaderTopMenuUserDropdownItemAction;
HeaderTopMenuUserDropdownItem.Icon = HeaderTopMenuUserDropdownItemIcon;
HeaderTopMenuUserDropdownItem.Text = HeaderTopMenuUserDropdownItemText;
HeaderTopMenuUserDropdownItem.Menu = HeaderTopMenuUserDropdownItemMenu;

export { HeaderTopMenuUserDropdownItem, StyledHeaderTopMenuUserDropdownItem };
