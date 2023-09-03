import React from "react";
import PropTypes from "prop-types";

import { StyledListLayoutDetailed } from "./StyledListLayoutDetailed";
import { ListLayoutContext } from "../index";
import { Sticky } from "../../Sticky";

function ListLayoutDetailed({
  children,
  "data-testid": testId,
  className,
  offsetTop,
}) {
  const { headerRect } = React.useContext(ListLayoutContext);

  const innerOffsetTop =
    offsetTop || (headerRect ? headerRect.top + headerRect.height : 0);

  return (
    <Sticky offsetTop={innerOffsetTop} className={className}>
      {({ ref, style, rect }) => {
        return (
          <StyledListLayoutDetailed
            data-testid={testId}
            ref={ref}
            style={{
              ...style,
              zIndex: rect && rect.top < innerOffsetTop ? 2 : 3,
            }}
            className={className}
          >
            {children}
          </StyledListLayoutDetailed>
        );
      }}
    </Sticky>
  );
}

ListLayoutDetailed.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  "data-testid": PropTypes.string,
  className: PropTypes.string,
  offsetTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export { ListLayoutDetailed };
