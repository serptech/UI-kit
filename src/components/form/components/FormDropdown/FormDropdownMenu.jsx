import styled, { css } from "styled-components";

import { colors } from "../../../../style";

function getInlineStyles({ inline }) {
  return inline
    ? css`
        width: 100%;
      `
    : css`
        box-shadow: 0 0 80px 0 #a2b6bd33;
        position: absolute;
        top: 100%;
        border-radius: 4px;
        z-index: 3;
      `;
}

const FormDropdownMenu = styled.ul`
  cursor: default;
  /* сделано для того, чтобы паддинги не влияли на max-height */
  box-sizing: content-box;
  max-height: 248px;
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  background-color: ${colors.whiteSimple};
  overflow-y: auto;
  ${getInlineStyles}

  ${({ isVisible }) =>
    !isVisible &&
    css`
      display: none;
    `}
  
  ${({ withSearch }) =>
    withSearch &&
    css`
      padding-top: 16px;
    `}
`;

export { FormDropdownMenu };
