/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { StyledButton } from "./Button";
import { Link } from "react-router-dom";

const LinkWithOmittedProps = ({ size, theme, fit, ...restProps }) => (
  <Link {...restProps} />
);

LinkWithOmittedProps.propTypes = {
  size: PropTypes.string,
  theme: PropTypes.string,
  fit: PropTypes.string,
};

export const ButtonLink = styled(StyledButton).attrs(() => ({
  as: LinkWithOmittedProps,
}))`
  text-decoration: none;
  /* Safari */
  -webkit-appearance: none !important;
`;

ButtonLink.defaultProps = {
  size: "medium",
  theme: "reset",
  fit: "rect",
};
