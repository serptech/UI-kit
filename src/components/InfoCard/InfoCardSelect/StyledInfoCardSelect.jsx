import styled from "styled-components";

import { InfoCardSelectTag } from "./InfoCardSelectTag";

const StyledInfoCardSelect = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  overflow: hidden;
  position: relative;

  ${InfoCardSelectTag} {
    &:not(:last-child) {
      margin-right: 6px;
      margin-bottom: 6px;
    }
  }
`;

export { StyledInfoCardSelect };
