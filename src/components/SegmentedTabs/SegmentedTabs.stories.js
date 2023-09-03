import React from "react";
import { storiesOf } from "@storybook/react";

import { useState } from "react";

import { SegmentedTabs } from "./index";

import { generateOptions } from "../../../test/generate";

storiesOf("Data display|SegmentedTabs", module).add("default", () => {
  const options = generateOptions(5).map((option) => ({
    ...option,
    Component: () => <p>{option.label}</p>,
  }));

  function ComponentWrapper() {
    const [selected, setSelected] = useState(null);

    return (
      <SegmentedTabs
        options={options}
        defaultActiveTab={null}
        value={selected}
        onChange={({ activeTab }) => setSelected(activeTab)}
      />
    );
  }

  return <ComponentWrapper />;
});
