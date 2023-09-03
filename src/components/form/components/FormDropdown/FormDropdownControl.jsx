import styled from "styled-components";

import { Button } from "../../../Button";
import { TextTrim, colors } from "../../../../style";

const FormDropdownControl = styled(Button)`
  ${TextTrim}
  width: 100%;
  position: relative;
  height: 30px;
  background-color: ${colors.whiteGrayLight};
  color: ${({ hasValue }) => (hasValue ? colors.darkBlack : "#9FA7AE")};
  padding: 0 40px 0 15px;
  border-radius: 5px;
  /**
    переопределяем стили кнопки
  */
  text-align: left;

  &:after {
    content: "";
    display: block;
    height: 0;
    width: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 18px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #222;
    margin: auto 0;
  }
`;

export { FormDropdownControl };
