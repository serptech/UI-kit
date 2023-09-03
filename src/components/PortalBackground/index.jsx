import React from "react";
import PropTypes from "prop-types";

import usePortal from "react-useportal";

import { StyledPortalBackground } from "./StyledPortalBackground";

function PortalBackground({ rect, style, className, "data-testid": testId }) {
  const { Portal } = usePortal();

  return (
    rect && (
      <Portal>
        <StyledPortalBackground
          data-testid={testId}
          className={className}
          style={{
            height: rect.height + 2,
            top: window.scrollY + rect.top - 1,
            ...style,
          }}
        />
      </Portal>
    )
  );
}

PortalBackground.propTypes = {
  rect: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

PortalBackground.defaultProps = {
  rect: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
  "data-testid": "portal-background",
};

export { PortalBackground };
