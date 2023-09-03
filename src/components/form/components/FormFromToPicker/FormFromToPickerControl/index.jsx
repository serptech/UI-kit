import styled from "styled-components";

import { FormDropdownControl } from "../../FormDropdown/FormDropdownControl";

const FormFromToPickerControl = styled(FormDropdownControl).attrs(() => ({
  hasValue: true,
}))`
  min-width: 127px;
`;

export { FormFromToPickerControl };
