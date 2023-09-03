import styled from "styled-components";

import { colors } from "../../../../../../style";

const HeaderTopMenuUserDropdownItemText = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 16px;
  color: ${colors.darkBlack};
  padding: 0;

  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export { HeaderTopMenuUserDropdownItemText };
