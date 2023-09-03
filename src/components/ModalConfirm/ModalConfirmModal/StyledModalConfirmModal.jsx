import styled from "styled-components";
import { colors } from "../../../style";

export const StyledModalConfirmModal = styled.div`
  box-sizing: border-box;
  width: 750px;
  min-height: 294px;
  border-radius: 2px;
  box-shadow: 0px 0px 80px rgba(162, 182, 189, 0.2);
  background-color: ${colors.whiteSimple};
  padding: 48px 56px;
  z-index: 101;
  display: flex;
  flex-direction: column;
  position: relative;
`;
