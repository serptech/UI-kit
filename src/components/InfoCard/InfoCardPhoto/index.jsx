import React from "react";
import PropTypes from "prop-types";

import { StyledInfoCardPhoto } from "./StyledInfoCardPhoto";
import { InfoCardPhotoImg } from "./InfoCardPhotoImg";

function InfoCardPhoto({ src, className, "data-testid": testId }) {
  return (
    <StyledInfoCardPhoto className={className} data-testid={testId}>
      <InfoCardPhotoImg src={src} />
    </StyledInfoCardPhoto>
  );
}

InfoCardPhoto.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

InfoCardPhoto.defaultProps = {
  "data-testid": "info-card-photo",
};

export { InfoCardPhoto, StyledInfoCardPhoto };
