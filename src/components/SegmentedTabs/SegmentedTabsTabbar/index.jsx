import React from "react";
import PropTypes from "prop-types";

import { useTabsContext } from "@reach/tabs";

import { StyledSegmentedTabsTabbar } from "./StyledSegmentedTabsTabbar";
import { Button } from "../../Button";
import { Tab } from "@reach/tabs";

import { findOptionIndexByValue } from "../../../utils";

function SegmentedTabsTabbar({ options, "data-testid": testId, className }) {
  const { selectedIndex } = useTabsContext();

  function renderTabBarItem(option, _, options) {
    const { label, value, to } = option;

    function getButtonTheme(buttonIndex) {
      return selectedIndex === buttonIndex ? "dark" : "light";
    }

    return (
      <Tab
        as={Button}
        key={value}
        data-testid={`${testId}-${value}`}
        theme={getButtonTheme(findOptionIndexByValue(options, value))}
        to={to}
      >
        {label}
      </Tab>
    );
  }

  return (
    <StyledSegmentedTabsTabbar className={className}>
      {options.map(renderTabBarItem)}
    </StyledSegmentedTabsTabbar>
  );
}

SegmentedTabsTabbar.propTypes = {
  options: PropTypes.array.isRequired,
  "data-testid": PropTypes.string,
  className: PropTypes.string,
};

export { SegmentedTabsTabbar, StyledSegmentedTabsTabbar };
