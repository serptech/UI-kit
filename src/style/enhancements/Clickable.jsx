import { css } from "styled-components";

const Clickable = css`
  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}
`;

export { Clickable };
