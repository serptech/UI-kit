import styled, { css } from "styled-components";

import { TextTrim, colors } from "../../../../style";

function getHighlightedStyles({ highlighted }) {
  return highlighted
    ? css`
        background-color: #f5f5f5;
      `
    : css`
        &:hover {
          background-color: ${colors.whiteSimple};
        }
      `;
}

function getDisabledStyles({ disabled }) {
  return disabled
    ? css`
        border-color: #546e7a;
        opacity: 0.5;
      `
    : css`
        &:hover {
          background-color: #f5f5f5;
        }
      `;
}

const FormDropdownOption = styled.li`
  ${TextTrim}
  position: relative;
  color: ${colors.darkBlack};
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  transition: background-color 120ms ease-in-out;
  padding: 8px 32px;
  ${getHighlightedStyles}
  ${getDisabledStyles}
`;

export { FormDropdownOption };
