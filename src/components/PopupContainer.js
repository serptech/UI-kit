import styled, { css } from "styled-components";

function getStyles({ isOpen }) {
  return !isOpen
    ? css`
        opacity: 0;
        visibility: hidden;
        position: fixed;
      `
    : css``;
}

function getCoords({ top, bottom, left, right }) {
  return css`
    ${top !== undefined && `top: ${top}px;`}
    ${bottom !== undefined && `bottom: ${bottom}px;`}
    ${left !== undefined && `left: ${left}px;`}
    ${right !== undefined && `right: ${right}px;`}
  `;
}

export const PopupContainer = styled.div`
  position: absolute;
  z-index: 2;

  ${getCoords}
  ${getStyles}
`;
