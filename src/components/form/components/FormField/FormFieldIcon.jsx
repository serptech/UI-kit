import styled from "styled-components";

import { InfoCircle } from "../../../icons";

import { colors } from "../../../../style";

const FormFieldIcon = styled(InfoCircle)`
  align-self: flex-start;
  color: ${colors.grayMedium};
  margin-left: 2px;
  min-width: 14px;
`;

export { FormFieldIcon };
