import React from "react";

import { TabPanels, TabPanel } from "@reach/tabs";
import { DatePickerTabsTabbar } from "./DatePickerTabsTabbar";
import { DatePickerTabsInner } from "./DatePickerTabsInner";
import { DatePickerAbsolute } from "../DatePickerAbsolute";
import { DatePickerRelative } from "../DatePickerRelative";
import { StyledDatePickerTabs } from "./StyledDatePickerTabs";

function DatePickerTabs() {
  return (
    <StyledDatePickerTabs defaultActiveTab="absolute">
      <DatePickerTabsTabbar />
      <DatePickerTabsInner>
        <TabPanels>
          <TabPanel index={0}>
            <DatePickerAbsolute />
          </TabPanel>
          <TabPanel index={1}>
            <DatePickerRelative />
          </TabPanel>
        </TabPanels>
      </DatePickerTabsInner>
    </StyledDatePickerTabs>
  );
}

export { DatePickerTabs };
