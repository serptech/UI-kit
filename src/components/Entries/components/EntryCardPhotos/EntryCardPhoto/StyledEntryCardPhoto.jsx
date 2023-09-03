import styled, { css } from "styled-components";

const StyledEntryCardPhoto = styled.div`
  display: flex;
  align-items: center;

  ${({ isHidden }) =>
    isHidden &&
    css`
      opacity: 0;
    `}
`;

export { StyledEntryCardPhoto };
