import styled from "styled-components";

import { FormDropdownMenu } from "../../../../../form/components/FormDropdown/FormDropdownMenu";
import { FormDropdownSearch } from "../../../../../form/components/FormDropdown/FormDropdownSearch";

const HeaderTopMenuUserDropdownItemMenu = styled.div`
  flex: 100%;
  padding-top: 16px;

  ${FormDropdownMenu} {
    padding-top: 0;
    padding-bottom: 0;
  }

  ${FormDropdownSearch} {
    margin-right: 0;
  }
`;

export { HeaderTopMenuUserDropdownItemMenu };
