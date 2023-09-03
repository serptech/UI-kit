import styled from "styled-components";

import { StyledButton } from "../../Button";
import { TabList } from "@reach/tabs";

import { colors } from "../../../style/color";

const StyledSegmentedTabsTabbar = styled(TabList)`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 28px;
  }

  ${StyledButton} {
    border-radius: 4px;

    &:first-child {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }

    &:last-child {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }

    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }

    &:not(:last-child) {
      border-right: 1px solid ${colors.whiteSimple};
    }
  }
`;

export { StyledSegmentedTabsTabbar };
