import styled from "styled-components";

import { colors } from "../../../../style";
import { PopupContainer } from "../../../PopupContainer";

const FormFromToPickerPopup = styled(PopupContainer)`
  background-color: ${colors.whiteSimple};
  width: 275px;
  box-shadow: 0px 0px 80px rgba(162, 182, 189, 0.2);
  border-radius: 5px;
  padding-top: 16px;
  box-sizing: border-box;
  z-index: 11;
`;

export { FormFromToPickerPopup };
