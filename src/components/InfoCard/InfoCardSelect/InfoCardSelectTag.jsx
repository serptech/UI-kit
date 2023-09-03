import styled from "styled-components";

import { TextTrim, colors } from "../../../style";

const InfoCardSelectTag = styled.li`
  ${TextTrim}
  background-color: ${colors.grayLight};
  padding: 4px 6px;
  font-size: 12px;
  line-height: 11px;
  text-align: center;
  color: ${colors.darkBlack};
  box-sizing: border-box;
  border-radius: 2px;
  height: 20px;
  max-width: 180px;
`;

export { InfoCardSelectTag };
