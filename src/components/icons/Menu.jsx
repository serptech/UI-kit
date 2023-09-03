import React from "react";
import PropTypes from "prop-types";

function Menu({ size, className }) {
  return (
    <svg
      width={size}
      height={className}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.27906 3.71973C1.84883 3.71973 1.50006 4.0685 1.50006 4.49873C1.50006 4.92895 1.84883 5.27772 2.27906 5.27772L14.7211 5.27772C15.1513 5.27772 15.5001 4.92895 15.5001 4.49873C15.5001 4.0685 15.1513 3.71973 14.7211 3.71973L2.27906 3.71973ZM1.50006 8.49872C1.50006 8.0685 1.84883 7.71973 2.27906 7.71973L14.7211 7.71973C15.1513 7.71973 15.5001 8.0685 15.5001 8.49872C15.5001 8.92895 15.1513 9.27772 14.7211 9.27772H2.27906C1.84883 9.27772 1.50006 8.92895 1.50006 8.49872ZM1.50006 12.4987C1.50006 12.0685 1.84883 11.7197 2.27906 11.7197L14.7211 11.7197C15.1513 11.7197 15.5001 12.0685 15.5001 12.4987C15.5001 12.929 15.1513 13.2777 14.7211 13.2777H2.27906C1.84883 13.2777 1.50006 12.929 1.50006 12.4987Z"
        fill="currentColor"
      />
    </svg>
  );
}

Menu.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Menu.defaultProps = {
  size: 10,
};

export default Menu;
