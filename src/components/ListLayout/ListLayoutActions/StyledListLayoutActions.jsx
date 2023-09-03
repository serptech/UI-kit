import styled from "styled-components";

import { StyledFormCheckbox } from "../../form/components/FormCheckbox/index";

const StyledListLayoutActions = styled.div`
  display: flex;
  align-items: center;
  height: 30px;

  &:not(:last-child) {
    margin-bottom: 18px;
  }

  ${StyledFormCheckbox}:not(:last-child) {
    margin-right: 24px;
  }
`;

export { StyledListLayoutActions };
