import React from "react";
import PropTypes from "prop-types";

import { StyledLoginPromo } from "./StyledLoginPromo";
import { LoginPromoLogo } from "./LoginPromoLogo";
import { LoginPromoTitle } from "./LoginPromoTitle";

export function LoginPromo({ logo, title }) {
  return (
    <StyledLoginPromo>
      {logo && <LoginPromoLogo>{logo}</LoginPromoLogo>}
      {title && <LoginPromoTitle>{title}</LoginPromoTitle>}
    </StyledLoginPromo>
  );
}

LoginPromo.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  title: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
    PropTypes.string,
  ]),
};
