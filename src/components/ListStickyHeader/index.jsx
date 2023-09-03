import React from "react";
import PropTypes from "prop-types";

import { useContext } from "react";

import { Sticky } from "../Sticky";
import { StyledListStickyHeader } from "./StyledListStickyHeader";

import { ListLayoutContext } from "../ListLayout";

function ListStickyHeader({ children, className, innerZ, offsetTop }) {
  const { setHeaderRect } = useContext(ListLayoutContext);

  return (
    <Sticky
      onRectChange={setHeaderRect}
      innerZ={innerZ}
      offsetTop={offsetTop}
      hasBackground={true}
    >
      {({ style, ref }) => (
        <StyledListStickyHeader className={className} style={style} ref={ref}>
          {children}
        </StyledListStickyHeader>
      )}
    </Sticky>
  );
}

ListStickyHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.array,
  ]).isRequired,
  className: PropTypes.string,
  innerZ: PropTypes.number,
  offsetTop: PropTypes.number,
};

ListStickyHeader.defaultProps = {
  innerZ: 3,
  offsetTop: 59,
};

export { ListStickyHeader };
