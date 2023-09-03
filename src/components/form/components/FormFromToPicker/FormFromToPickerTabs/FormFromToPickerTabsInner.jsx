import styled from "styled-components";

import { FormDropdownMenu } from "../../FormDropdown/FormDropdownMenu";

const FormFromToPickerTabsInner = styled.div`
  height: 275px;

  ${FormDropdownMenu} {
    max-height: 275px;
  }
`;

export { FormFromToPickerTabsInner };
