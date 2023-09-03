import React from "react";
import PropTypes from "prop-types";

import { StyledBreadcrumbsItem } from "./StyledBreadcrumbsItem";
import { BreadcrumbsItemText } from "./BreadcrumbsItemText";
import { BreadcrumbsItemIcon } from "./BreadcrumbsItemIcon";

function BreadcrumbsItem({
  children,
  isDisabled,
  onClick,
  isActive,
  to,
  ...restProps
}) {
  const onClickAllowed = !isDisabled && !isActive && !to;

  return (
    <StyledBreadcrumbsItem
      isDisabled={isDisabled}
      isActive={isActive}
      onClick={onClickAllowed ? onClick : undefined}
      {...restProps}
    >
      <BreadcrumbsItemText to={to}>{children}</BreadcrumbsItemText>
      <BreadcrumbsItemIcon size="12" />
    </StyledBreadcrumbsItem>
  );
}

BreadcrumbsItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  isDisabled: PropTypes.bool,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  to: PropTypes.string,
};

export { BreadcrumbsItem, StyledBreadcrumbsItem };
