import styled from "styled-components";

import { StyledFormField, StyledFormInput } from "../../form/components";

const StyledLoginForm = styled.form`
  text-align: center;
  position: relative;

  ${StyledFormInput} {
    width: 292px;
    height: 40px;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    font-weight: bold;
  }

  ${StyledFormField} {
    &:not(:last-of-type) {
      margin-bottom: 16px;
    }
  }
`;

export { StyledLoginForm };
