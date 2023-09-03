import styled from "styled-components";
import { colors } from "../../../style";

export const ModalConfirmModalContent = styled.div`
  color: ${colors.darkBlack};
  font-size: 16px;
  line-height: 26px;

  p:not(:last-child) {
    margin-bottom: 24px;
  }
`;
