import React from "react";
import PropTypes from "prop-types";

import { useRef } from "react";
import { usePositionPopup } from "../../hooks";

import { StyledTooltipContainer } from "./StyledTooltipContainer";
import { TooltipInner } from "./TooltipInner";
import { TooltipTitle } from "./TooltipTitle";

function Tooltip(props) {
  const { title, children, "data-testid": testId, className, position } = props;
  const tooltipTrigger = useRef(null);
  const { Portal, openPortal, closePortal, isOpen, coords, popupInner, bind } =
    usePositionPopup({
      onMouseEnter: () => openPortal(),
      onMouseLeave: () => closePortal(),
      pupupTrigger: tooltipTrigger,
      position,
      initialIsOpen: props.isOpen,
    });

  return (
    <React.Fragment>
      {typeof children === "function" ? (
        children({
          isOpen,
          tooltipTrigger,
          bind,
        })
      ) : children.type ? (
        React.cloneElement(children, { ...bind, ref: tooltipTrigger })
      ) : (
        <span {...bind} ref={tooltipTrigger}>
          {children}
        </span>
      )}
      <Portal>
        <StyledTooltipContainer
          data-testid={testId}
          className={className}
          isOpen={isOpen}
          left={coords.left}
          top={coords.top}
        >
          <TooltipInner
            data-testid="tooltip-inner"
            ref={popupInner}
            position={position}
          >
            <TooltipTitle>{title}</TooltipTitle>
          </TooltipInner>
        </StyledTooltipContainer>
      </Portal>
    </React.Fragment>
  );
}

Tooltip.propTypes = {
  className: PropTypes.string,
  "data-testid": PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  isOpen: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  position: PropTypes.oneOf(["right", "left"]).isRequired,
};

Tooltip.defaultProps = {
  "data-testid": "tooltip",
  position: "right",
};

export { Tooltip, StyledTooltipContainer };
