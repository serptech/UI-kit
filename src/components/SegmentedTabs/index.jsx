import React from "react";
import PropTypes from "prop-types";

import { StyledSegmentedTabs } from "./StyledSegmentedTabs";
import { SegmentedTabsTabbar } from "./SegmentedTabsTabbar";
import { SegmentedTabsSpinner } from "./SegmentedTabsSpinner";
import { SegmentedTabsPanels } from "./SegmentedTabsPanels";
import { SegmentedTabsPanel } from "./SegmentedTabsPanel";

import { findOptionIndexByValue } from "../../utils";

function SegmentedTabs({
  options,
  defaultActiveTab,
  value,
  onChange,
  "data-testid": testId,
  className,
  renderTab,
  children,
}) {
  return (
    <StyledSegmentedTabs
      defaultIndex={
        defaultActiveTab ? findOptionIndexByValue(options, defaultActiveTab) : 0
      }
      index={value ? findOptionIndexByValue(options, value) : null}
      onChange={(index) => {
        if (onChange) {
          onChange({ activeTab: options[index].value });
        }
      }}
      className={className}
    >
      <SegmentedTabsTabbar options={options} data-testid={`${testId}-tabbar`} />
      <SegmentedTabsPanels data-testid={`${testId}-tabpanels`}>
        {children || options.map((option) => renderTab(option, testId))}
      </SegmentedTabsPanels>
    </StyledSegmentedTabs>
  );
}

SegmentedTabs.propTypes = {
  options: PropTypes.array.isRequired,
  defaultActiveTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  "data-testid": PropTypes.string,
  className: PropTypes.string,
  renderTab: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
};

SegmentedTabs.defaultProps = {
  options: [],
  renderTab(option, testId) {
    const { value, Component } = option;

    return (
      <SegmentedTabsPanel
        key={value}
        data-testid={`${testId}-tabpanel-${value}`}
      >
        {React.isValidElement(Component) ? Component : <Component />}
      </SegmentedTabsPanel>
    );
  },
};

export { SegmentedTabs, SegmentedTabsTabbar, SegmentedTabsSpinner };
