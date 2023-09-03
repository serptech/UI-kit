import styled from "styled-components";

import { ValueSpan } from "../../../ValueSpan";
import { TextTrim, colors } from "../../../../style";

const PersonCardDetailedDataItemValue = styled(ValueSpan)`
  ${TextTrim}
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: ${colors.darkBlack};
`;

export { PersonCardDetailedDataItemValue };
