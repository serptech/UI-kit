import styled from "styled-components";

import { colors } from "../../../style";

const LoginFormError = styled.p`
  position: absolute;
  bottom: 55px;
  margin: 0;
  width: 100%;
  font-size: 12px;
  line-height: 11px;
  text-align: center;
  color: ${colors.darkBlack};
`;

export { LoginFormError };
