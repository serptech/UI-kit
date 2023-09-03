import React from "react";
import PropTypes from "prop-types";

function Kebab({ size, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="3" r="2" fill="#222222" />
      <circle cx="8" cy="8" r="2" fill="#222222" />
      <circle cx="8" cy="13" r="2" fill="#222222" />
    </svg>
  );
}

Kebab.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Kebab.defaultProps = {
  size: 10,
};

export default Kebab;
