import React from "react";
import PropTypes from "prop-types";

import { useDropzone } from "react-dropzone";

import { StyledUploader } from "./StyledUploader";
import { UploaderText } from "./UploaderText";

const imagesAcceptMimeTypes = [
  ".png",
  ".PNG",
  ".jpg",
  ".JPG",
  ".jpeg",
  ".JPEG",
];

function Uploader({
  children,
  onUpload,
  isDisabled,
  className,
  "data-testid": testId,
  multiple,
  accept,
}) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onUpload,
    disabled: isDisabled,
    accept,
    multiple: multiple,
    "data-testid": testId,
  });

  return (
    <StyledUploader
      {...getRootProps()}
      isDisabled={isDisabled}
      isDragActive={isDragActive}
      data-testid={testId}
      className={className}
    >
      {children}
      <input {...getInputProps()} data-testid={`${testId}-upload-input`} />
    </StyledUploader>
  );
}

Uploader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  onUpload: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
  multiple: PropTypes.bool,
  accept: PropTypes.array,
};

Uploader.defaultProps = {
  "data-testid": "upload-photo-dropzone",
  multiple: false,
  accept: imagesAcceptMimeTypes,
};

Uploader.Text = UploaderText;

export { Uploader, StyledUploader, UploaderText };
