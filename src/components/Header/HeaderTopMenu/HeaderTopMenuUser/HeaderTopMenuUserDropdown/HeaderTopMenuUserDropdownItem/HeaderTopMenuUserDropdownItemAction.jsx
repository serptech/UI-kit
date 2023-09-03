import styled from "styled-components";

import { Button } from "../../../../../Button";
import { ButtonLink } from "../../../../../ButtonLink";

import { colors } from "../../../../../../style";

const HeaderTopMenuUserDropdownItemAction = styled(Button).attrs(({ to }) => ({
  as: to ? ButtonLink : Button,
}))`
  position: relative;
  top: -1px;
  padding: 0;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: ${colors.bluish};
`;

export { HeaderTopMenuUserDropdownItemAction };
