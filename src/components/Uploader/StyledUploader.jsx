import styled, { css } from "styled-components";

import { colors } from "../../style";

function getStyles({ isDisabled }) {
  return isDisabled
    ? css`
        border-color: ${colors.graySimple};
        color: ${colors.black};
      `
    : css`
        cursor: pointer;

        &:hover {
          border-color: ${colors.graySimple};
          color: ${colors.black};
        }
      `;
}

const StyledUploader = styled.div`
  border: 3px dashed ${colors.graySimpleLight};
  border-radius: 4px;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
  outline: none;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  flex: 100% 1 1;
  ${getStyles}
`;

export { StyledUploader };
