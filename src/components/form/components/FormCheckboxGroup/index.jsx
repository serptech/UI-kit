/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

import { StyledFormCheckboxGroup } from "./StyledFormCheckboxGroup";
import { FormCheckboxGroupItem } from "./FormCheckboxGroupItem";
import { useSelectableList } from "../../../../hooks/index";

function FormCheckboxGroup({
  value,
  onChange,
  groupName,
  render,
  options,
  renderCheckbox,
}) {
  const { ...selectedListOptions } = useSelectableList({
    options,
    value,
    onChange,
  });

  return (
    <StyledFormCheckboxGroup>
      {render({
        ...selectedListOptions,
        checkboxes: () => {
          return options.map((option) =>
            renderCheckbox({
              ...option,
              groupName,
              selected: selectedListOptions.selected,
              onChange: selectedListOptions.onCheckboxChange,
            })
          );
        },
      })}
    </StyledFormCheckboxGroup>
  );
}

FormCheckboxGroup.propTypes = {
  render: PropTypes.func.isRequired,
  renderCheckbox: PropTypes.func.isRequired,
  groupName: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};

FormCheckboxGroup.defaultProps = {
  renderCheckbox: ({
    label,
    value: optionValue,
    onChange,
    selected,
    groupName,
  }) => {
    const strOption = String(optionValue);

    return (
      <FormCheckboxGroupItem
        key={optionValue}
        label={label}
        name={strOption}
        checked={selected.includes(strOption)}
        onChange={onChange}
        groupName={groupName}
      />
    );
  },
};

FormCheckboxGroup.Item = FormCheckboxGroupItem;

export { FormCheckboxGroup, StyledFormCheckboxGroup };

export * from "./FormCheckboxGroupItem";
