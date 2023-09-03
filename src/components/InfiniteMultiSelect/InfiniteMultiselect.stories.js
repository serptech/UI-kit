import React from "react";

import { useState } from "react";

import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { InfiniteMultiSelect } from "./index.jsx";

import { generateOptions } from "../../../test/generate";

storiesOf("Controls|InfiniteMultiSelect", module).add("default", () => {
  const options = generateOptions(10);
  const isFetching = boolean("is fetching", false);

  function InfiniteMultiSelectConsumer() {
    const [value, setValue] = useState([]);

    return (
      <InfiniteMultiSelect
        value={value}
        onChange={setValue}
        options={options}
        fetchOptions={action("fetch items")}
        isFetching={isFetching}
        placeholder={isFetching ? "Loading..." : "Select value..."}
      />
    );
  }

  return <InfiniteMultiSelectConsumer />;
});
