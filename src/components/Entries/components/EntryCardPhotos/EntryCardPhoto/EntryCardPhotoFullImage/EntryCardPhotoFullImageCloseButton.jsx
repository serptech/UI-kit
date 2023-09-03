import styled from "styled-components";

import { Button } from "../../../../../Button";

import { colors } from "../../../../../../style";

const EntryCardPhotoFullImageCloseButton = styled(Button)`
  position: fixed;
  top: 40px;
  right: 200px;
  height: 30px;
  width: 30px;
  line-height: 0;
  z-index: 21;
  background-color: ${colors.grayLight};
`;

export { EntryCardPhotoFullImageCloseButton };
