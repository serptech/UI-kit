import styled from "styled-components";

import { TextTrim, colors } from "../../../../../../style";

const FormMultiSelectTagsItemTitle = styled.span`
  ${TextTrim}
  font-size: 12px;
  line-height: 20px;
  color: ${colors.darkBlack};

  &:not(:last-child) {
    margin-right: 4px;
  }
`;

export { FormMultiSelectTagsItemTitle };
