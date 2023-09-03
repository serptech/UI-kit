import React from "react";
import PropTypes from "prop-types";

function TimesDelete({ size, className }) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.8473 12.9506C12.1516 13.2548 12.6448 13.2548 12.949 12.9506C13.2532 12.6464 13.2532 12.1531 12.949 11.8489L9.09976 7.99966L12.9487 4.15075C13.2529 3.84654 13.2529 3.3533 12.9487 3.04908C12.6444 2.74487 12.1512 2.74487 11.847 3.04908L7.99809 6.89799L4.15118 3.05108C3.84696 2.74686 3.35373 2.74686 3.04951 3.05108C2.74529 3.3553 2.74529 3.84853 3.04951 4.15275L6.89642 7.99966L3.04916 11.8469C2.74495 12.1511 2.74495 12.6444 3.04916 12.9486C3.35338 13.2528 3.84662 13.2528 4.15083 12.9486L7.99809 9.10133L11.8473 12.9506Z"
        fill="currentColor"
      />
    </svg>
  );
}

TimesDelete.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

TimesDelete.defaultProps = {
  size: 10,
};

export default TimesDelete;
