import React from "react";
import PropTypes from "prop-types";

import { StyledModalConfirmModal } from "./StyledModalConfirmModal";
import { ModalConfirmModalTitle } from "./ModalConfirmModalTitle";
import { ModalConfirmModalButton } from "./ModalConfirmModalButton";
import { ModalConfirmModalButtons } from "./ModalConfirmModalButtons";
import { ModalConfirmModalContent } from "./ModalConfirmModalContent.jsx";
import { ModalConfirmModalBody } from "./ModalConfirmModalBody.jsx";
import { ModalConfirmModalCloseButton } from "./ModalConfirmModalCloseButton.jsx";
import { TimesDelete } from "../../icons";

function ModalConfirmModal({
  title,
  content,
  okText,
  cancelText,
  onConfirm,
  onCancel,
}) {
  return (
    <StyledModalConfirmModal>
      <ModalConfirmModalBody>
        <ModalConfirmModalTitle level={2}>{title}</ModalConfirmModalTitle>
        <ModalConfirmModalContent>{content}</ModalConfirmModalContent>
      </ModalConfirmModalBody>
      <ModalConfirmModalButtons>
        <ModalConfirmModalButton theme="dark" size="large" onClick={onConfirm}>
          {okText}
        </ModalConfirmModalButton>
        <ModalConfirmModalButton theme="light" size="large" onClick={onCancel}>
          {cancelText}
        </ModalConfirmModalButton>
      </ModalConfirmModalButtons>
      <ModalConfirmModalCloseButton onClick={onCancel}>
        <TimesDelete size={18} />
      </ModalConfirmModalCloseButton>
    </StyledModalConfirmModal>
  );
}

ModalConfirmModal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

ModalConfirmModal.defaultProps = {
  okText: "Ok",
  cancelText: "Cancel",
};

export { ModalConfirmModal, StyledModalConfirmModal };
