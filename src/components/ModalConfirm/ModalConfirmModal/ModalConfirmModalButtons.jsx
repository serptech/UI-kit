import styled from "styled-components";

import { ModalConfirmModalButton } from "./ModalConfirmModalButton";

export const ModalConfirmModalButtons = styled.div`
  ${ModalConfirmModalButton}:not(:last-child) {
    margin-right: 24px;
  }
`;
