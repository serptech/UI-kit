import styled from "styled-components";

import { TextBold } from "../../../Text/TextBold";

import { colors } from "../../../../style";

const HeaderTopMenuUserSection = styled(TextBold)`
  display: flex;
  align-items: center;
  font-size: 13px;
  line-height: 170%;
  color: ${colors.darkBlack};
  padding: 0 16px;
  height: 100%;

  &:not(:last-child) {
    border-right: 1px solid ${colors.grayLight};
  }
`;

export { HeaderTopMenuUserSection };
