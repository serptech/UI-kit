import styled, { css } from "styled-components";
import { colors } from "../../style";

export const TreeMenuItem = styled.li`
  margin: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: ${colors.darkBlack};
  white-space: nowrap;
  cursor: pointer;

  ${({ isRoot }) =>
    !isRoot &&
    css`
      padding: 8px 16px;

      &:hover {
        background-color: #f7f8f9;
      }
    `}
`;
