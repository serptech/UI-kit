import styled from "styled-components";

import { PopupContainer } from "../../../../PopupContainer";
import { colors } from "../../../../../style";

const StyledHeaderTopMenuUserDropdown = styled(PopupContainer)`
  list-style-type: none;
  margin: 0;
  background-color: ${colors.whiteSimple};
  min-width: 280px;
  max-width: 348px;
  box-shadow: 0px 0px 80px rgba(162, 182, 189, 0.2);
  border-radius: 4px;
  padding: 32px 32px;
  box-sizing: border-box;
  z-index: 11;

  & > li:not(:last-child) {
    margin-bottom: 24px;
  }

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: -8px;
    right: 10px;
    border-width: 0 10px 8px 10px;
    border-style: solid;
    border-color: transparent transparent ${colors.whiteSimple} transparent;
  }
`;

export { StyledHeaderTopMenuUserDropdown };
