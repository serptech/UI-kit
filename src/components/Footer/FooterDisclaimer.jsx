import styled from "styled-components";

import { colors } from "../../style/color";

const FooterDisclaimer = styled.div`
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  color: ${colors.grayMedium};
  width: 430px;

  p {
    margin-top: 0;

    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;

export { FooterDisclaimer };
