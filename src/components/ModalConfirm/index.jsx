import React from "react";
import PropTypes from "prop-types";

import usePortal from "react-useportal";
import { useLockBodyScroll } from "react-use";

import { ModalConfirmModal } from "./ModalConfirmModal";
import { ModalConfirmOutline } from "./ModalConfirmOutline";
import { ModalConfirmWrapper } from "./ModalConfirmWrapper";

function ModalConfirm({
  children,
  title,
  content,
  okText,
  cancelText,
  onConfirm,
  portalRef,
}) {
  const [openModal, closeModal, isModalOpen, Portal, toggleModal] = usePortal();
  useLockBodyScroll(isModalOpen);

  return (
    <React.Fragment>
      {children({ openModal, closeModal, toggleModal, isModalOpen })}
      {isModalOpen && (
        <Portal ref={portalRef}>
          <ModalConfirmWrapper>
            <ModalConfirmOutline />
            <ModalConfirmModal
              title={title}
              content={content}
              okText={okText}
              cancelText={cancelText}
              onConfirm={(e) => {
                e.stopPropagation();
                closeModal(e);
                onConfirm();
              }}
              onCancel={(e) => {
                e.stopPropagation();
                closeModal(e);
              }}
            />
          </ModalConfirmWrapper>
        </Portal>
      )}
    </React.Fragment>
  );
}

ModalConfirm.propTypes = {
  children: PropTypes.func.isRequired,
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  portalRef: PropTypes.object,
};

export { ModalConfirm };
