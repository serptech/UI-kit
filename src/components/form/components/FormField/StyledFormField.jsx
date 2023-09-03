import styled, { css } from "styled-components";

import { FormLabel } from "../FormLabel";

const StyledFormField = styled.div`
  ${({ isFullWidth }) =>
    isFullWidth &&
    css`
      width: 100%;
      ${FormLabel} {
        width: 100%;
      }
    `}
`;

export default StyledFormField;
