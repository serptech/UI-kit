import React from "react";
import PropTypes from "prop-types";

function Plus({ size, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.2199 14.221C7.2199 14.6512 7.56867 15 7.99889 15C8.42912 15 8.77789 14.6512 8.77789 14.221L8.77789 8.77734L14.2211 8.77734C14.6513 8.77734 15.0001 8.42858 15.0001 7.99835C15.0001 7.56812 14.6513 7.21935 14.2211 7.21935L8.77789 7.21935V1.779C8.77789 1.34877 8.42912 1 7.99889 1C7.56867 1 7.2199 1.34877 7.2199 1.779L7.2199 7.21935L1.77906 7.21935C1.34883 7.21935 1.00006 7.56812 1.00006 7.99835C1.00006 8.42858 1.34883 8.77734 1.77906 8.77734H7.2199L7.2199 14.221Z"
        fill="currentColor"
      />
    </svg>
  );
}

Plus.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Plus.defaultProps = {
  size: 10,
};

export default Plus;
