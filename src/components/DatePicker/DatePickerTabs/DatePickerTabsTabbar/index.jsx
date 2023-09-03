import React from "react";

import { useTranslation } from "../../../../hooks";
import { useContext } from "react";
import { useTabsContext } from "@reach/tabs";
import { DatePickerContext } from "../../index";

import { StyledDatePickerTabsTabbar } from "./StyledDatePickerTabsTabbar";
import { DatePickerTabsTabbarButton } from "./DatePickerTabsTabbarButton";
import { Tab } from "@reach/tabs";

function DatePickerTabsTabbar() {
  const { selectedIndex } = useTabsContext();
  const { testId } = useContext(DatePickerContext);
  const { t } = useTranslation("DatePicker");

  return (
    <StyledDatePickerTabsTabbar>
      <Tab
        as={DatePickerTabsTabbarButton}
        data-testid={`${testId}-absolute`}
        isActive={selectedIndex === 0}
      >
        {t("Absolute")}
      </Tab>
      <Tab
        as={DatePickerTabsTabbarButton}
        data-testid={`${testId}-relative`}
        isActive={selectedIndex === 1}
      >
        {t("Relative")}
      </Tab>
    </StyledDatePickerTabsTabbar>
  );
}

export { DatePickerTabsTabbar };
