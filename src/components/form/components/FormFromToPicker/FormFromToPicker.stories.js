import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { FormFromToPicker } from "./index";

import { generateOptions } from "../../../../../test/generate";
import { InfiniteDropdown } from "../../../InfiniteDropdown";

storiesOf("Form Components/FormFromToPicker", module).add("default", () => {
  function FormFromToPickerWrapper({ fromOptions, toOptions }) {
    const [value, setValue] = useState([null, null]);

    const items = useMemo(
      () => [
        {
          label: "All",
          value: "all",
          Component: (
            <InfiniteDropdown
              value={value}
              fetchOptions={action("fetch all items")}
              onChange={(selected) => {
                setValue(selected);
              }}
              options={fromOptions.concat(toOptions)}
              inline={true}
              withSearch={true}
            />
          ),
        },
        {
          label: "From",
          value: "from",
          Component: (
            <InfiniteDropdown
              value={value[0]}
              fetchOptions={action("fetch from items")}
              onChange={(selected) => {
                setValue([selected, value[1]]);
              }}
              options={fromOptions}
              inline={true}
              withSearch={true}
            />
          ),
        },
        {
          label: "To",
          value: "to",
          Component: (
            <InfiniteDropdown
              value={value[1]}
              fetchOptions={action("fetch to items")}
              onChange={(selected) => {
                setValue([value[0], selected]);
              }}
              options={toOptions}
              inline={true}
              withSearch={true}
            />
          ),
        },
      ],
      [value, setValue, fromOptions, toOptions]
    );

    return (
      <FormFromToPicker
        value={value}
        onChange={setValue}
        placeholder="select something...."
        data-testid="form-from-to-picker"
      >
        <FormFromToPicker.Tabs items={items} />
      </FormFromToPicker>
    );
  }

  FormFromToPickerWrapper.propTypes = {
    fromOptions: PropTypes.array.isRequired,
    toOptions: PropTypes.array.isRequired,
  };

  const fromOptions = generateOptions(15);
  const toOptions = generateOptions(15);

  return (
    <FormFromToPickerWrapper fromOptions={fromOptions} toOptions={toOptions} />
  );
});
