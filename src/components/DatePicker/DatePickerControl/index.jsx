import styled from "styled-components";

import { FormDropdownControl } from "../../form/components/FormDropdown/FormDropdownControl";

const DatePickerControl = styled(FormDropdownControl).attrs(() => ({
  hasValue: true,
}))`
  min-width: 127px;
`;

export { DatePickerControl };
