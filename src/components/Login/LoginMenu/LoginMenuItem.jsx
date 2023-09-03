import styled from "styled-components";

import { colors } from "../../../style";

export const LoginMenuItem = styled.a`
  text-decoration: none;
  text-transform: lowercase;
  font-size: 13px;
  line-height: 18px;
  font-weight: 700;
  font-weight: bold;
  color: ${colors.darkBlack};

  &:not(:last-of-type) {
    margin-right: 32px;
  }
`;
