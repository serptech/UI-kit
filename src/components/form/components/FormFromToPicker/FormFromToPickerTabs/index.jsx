import React from "react";
import PropTypes from "prop-types";

import { TabPanels, TabPanel } from "@reach/tabs";
import { FormFromToPickerTabsTabbar } from "./FormFromToPickerTabsTabbar";
import { FormFromToPickerTabsInner } from "./FormFromToPickerTabsInner";
import { StyledFormFromToPickerTabs } from "./StyledFormFromToPickerTabs";

function FormFromToPickerTabs({
  items,
  defaultActiveTab,
  "data-testid": testId,
}) {
  return (
    <StyledFormFromToPickerTabs
      defaultActiveTab={defaultActiveTab || (items[0] && items[0].value)}
    >
      <FormFromToPickerTabsTabbar items={items} data-testid={testId} />
      <FormFromToPickerTabsInner>
        <TabPanels>
          {items.map(({ value, Component }) => {
            return (
              <TabPanel key={value}>
                {React.isValidElement(Component) ? Component : <Component />}
              </TabPanel>
            );
          })}
        </TabPanels>
      </FormFromToPickerTabsInner>
    </StyledFormFromToPickerTabs>
  );
}

FormFromToPickerTabs.propTypes = {
  items: PropTypes.array.isRequired,
  defaultActiveTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "data-testid": PropTypes.string,
};

FormFromToPickerTabs.defaultProps = {
  "data-testid": "form-from-to-picker",
};

export { FormFromToPickerTabs };
