import React from "react";

import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { InfiniteDropdown } from "./index.jsx";

import { generateOptions } from "../../../test/generate";

function isEven(n) {
  n = Number(n);
  return n === 0 || !!(n && !(n % 2));
}

storiesOf("Controls|InfiniteDropdown", module)
  .add("default", () => {
    const options = generateOptions(10);
    const isFetching = boolean("is fetching", false);

    return (
      <InfiniteDropdown
        options={options}
        fetchOptions={action("fetch items")}
        isFetching={isFetching}
        placeholder={isFetching ? "Loading..." : "Select value..."}
        width={240}
        withSearch={boolean("with search", false)}
      />
    );
  })
  .add("with custom item render", () => {
    const options = generateOptions(10);
    const isFetching = boolean("is fetching", false);

    return (
      <InfiniteDropdown
        options={options}
        fetchOptions={action("fetch items")}
        isFetching={isFetching}
        placeholder={isFetching ? "Loading..." : "Select value..."}
        width={240}
        withSearch={boolean("with search", false)}
        renderItem={(item) => (
          <span>{`${isEven(item.value) ? "🍎" : "🍌"} ${item.label}`}</span>
        )}
      />
    );
  });
