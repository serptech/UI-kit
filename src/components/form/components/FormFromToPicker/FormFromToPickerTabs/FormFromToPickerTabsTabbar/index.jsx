import React from "react";
import PropTypes from "prop-types";

import { useTabsContext } from "@reach/tabs";

import { Tab } from "@reach/tabs";
import { StyledFormFromToPickerTabsTabbar } from "./StyledFormFromToPickerTabsTabbar";
import { FormFromToPickerTabsTabbarButton } from "./FormFromToPickerTabsTabbarButton";

function FormFromToPickerTabsTabbar({ items, "data-testid": testId }) {
  const { selectedIndex } = useTabsContext();

  return (
    <StyledFormFromToPickerTabsTabbar>
      {items.map(({ label, value }, index) => {
        return (
          <Tab
            as={FormFromToPickerTabsTabbarButton}
            key={value}
            data-testid={`${testId}-${value}`}
            isActive={selectedIndex === index}
          >
            {label}
          </Tab>
        );
      })}
    </StyledFormFromToPickerTabsTabbar>
  );
}

FormFromToPickerTabsTabbar.propTypes = {
  items: PropTypes.array.isRequired,
  "data-testid": PropTypes.string,
};

export { FormFromToPickerTabsTabbar };
