import styled from "styled-components";

import { Tabs } from "@reach/tabs";
import { FormDropdownMenu } from "../../FormDropdown/FormDropdownMenu";

const StyledFormFromToPickerTabs = styled(Tabs)`
  ${FormDropdownMenu} {
    padding-top: 0;
  }
`;

export { StyledFormFromToPickerTabs };
