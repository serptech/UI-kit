import React from "react";
import { useState } from "react";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../../../test/utils";
import { generateOptions } from "../../../../test/generate";

import { SegmentedTabs } from "../index";

const componentName = "segmented-tabs";
function getComponentTestId(component) {
  return `${componentName}-${component}`;
}

const options = generateOptions(5).map((option) => ({
  ...option,
  Component: () => <p>{option.label}</p>,
}));

function renderSegmentedTabs(props = {}) {
  function SegmentedTabsWrapper() {
    const [selected, setSelected] = useState(null);

    return (
      <SegmentedTabs
        options={options}
        // eslint-disable-next-line react/prop-types
        defaultActiveTab={props.defaultActiveTab}
        value={selected}
        onChange={({ activeTab }) => setSelected(activeTab)}
        data-testid={componentName}
        {...props}
      />
    );
  }

  return render(<SegmentedTabsWrapper />);
}

describe("SegmentedTabs tests", () => {
  test("SegmentedTabs should render first tab if default is not provided", () => {
    renderSegmentedTabs();

    expect(
      screen.getByTestId(getComponentTestId(`tabpanel-${options[0].value}`))
    ).toBeVisible();
  });

  test("SegmentedTabs should render provided tab if default is provided", () => {
    renderSegmentedTabs({ defaultActiveTab: options[1].value });

    expect(
      screen.getByTestId(getComponentTestId(`tabpanel-${options[1].value}`))
    ).toBeVisible();
  });

  test("SegmentedTabs should render active tab on tab button click", () => {
    renderSegmentedTabs();

    userEvent.click(
      screen.getByTestId(getComponentTestId(`tabbar-${options[2].value}`))
    );

    expect(
      screen.getByTestId(getComponentTestId(`tabpanel-${options[2].value}`))
    ).toBeVisible();
  });
});
