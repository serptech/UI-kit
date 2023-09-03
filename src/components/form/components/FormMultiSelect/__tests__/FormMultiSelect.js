import React from "react";
import { useState } from "react";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../../../../../test/utils";
import { generateOptions } from "../../../../../../test/generate";

import { FormMultiSelect } from "../index";

const options = generateOptions(5);

const componentName = "test-form-multi-select";
const optionSelector = 'li[role="option"]';
const tagSelector = 'li[role="tag"]';

const onChangeMock = jest.fn();

afterEach(() => {
  onChangeMock.mockClear();
});

afterAll(() => {
  onChangeMock.mockReset();
});

function renderFormMultiSelect(props) {
  function FormMultiSelectWrapper() {
    const [value, setValue] = useState([]);

    return (
      <form data-testid="test-form">
        <FormMultiSelect
          name={componentName}
          value={value}
          options={options}
          onChange={(ev) => {
            setValue(ev);
            onChangeMock(ev);
          }}
          {...props}
        />
      </form>
    );
  }

  return render(<FormMultiSelectWrapper />);
}

describe("FormMultiSelect tests", () => {
  test("FormMultiSelect menu should be visible after click on control", () => {
    renderFormMultiSelect();

    expect(screen.getByTestId(`${componentName}-menu`)).not.toBeVisible();

    userEvent.click(screen.getByTestId(`${componentName}-input`));

    expect(screen.getByTestId(`${componentName}-menu`)).toBeVisible();
  });

  test("FormMultiSelect menu should render correct number of options", () => {
    renderFormMultiSelect();

    userEvent.click(screen.getByTestId(`${componentName}-input`));

    expect(
      screen
        .getByTestId(`${componentName}-menu`)
        .querySelectorAll(optionSelector)
    ).toHaveLength(options.length);
  });

  test("FormMultiSelect menu should be hidden after input blur", () => {
    renderFormMultiSelect();

    userEvent.click(screen.getByTestId(`${componentName}-input`));
    userEvent.tab();

    expect(screen.getByTestId(`${componentName}-menu`)).not.toBeVisible();
  });

  test("FormDropdown should render selected items correctly and call onChange prop", () => {
    renderFormMultiSelect();
    const optionsToSelect = options.slice(0, 3);

    userEvent.click(screen.getByTestId(`${componentName}-input`));

    optionsToSelect.forEach((option) => {
      userEvent.click(
        screen.getByTestId(`${componentName}-option-${option.value}`)
      );
    });

    optionsToSelect.forEach((option) => {
      expect(screen.getByTestId(`${componentName}-tag-${option.value}`));
    });
    expect(
      screen.getByTestId(`${componentName}-tags`).querySelectorAll(tagSelector)
    ).toHaveLength(3);
    expect(onChangeMock.mock.calls).toEqual([
      [[options[0]]],
      [[options[0], options[1]]],
      [[options[0], options[1], options[2]]],
    ]);
  });

  test("FormDropdown tag cross tag should remove selected items correctly and call onChange prop", () => {
    renderFormMultiSelect();
    const optionsToSelect = options.slice(0, 3);

    userEvent.click(screen.getByTestId(`${componentName}-input`));

    optionsToSelect.forEach((option) => {
      userEvent.click(
        screen.getByTestId(`${componentName}-option-${option.value}`)
      );
    });

    optionsToSelect.forEach((option) => {
      expect(screen.getByTestId(`${componentName}-tag-${option.value}`));
    });

    userEvent.click(
      screen.getByTestId(`${componentName}-tag-${options[0].value}-cross`)
    );
    expect(
      screen.getByTestId(`${componentName}-tags`).querySelectorAll(tagSelector)
    ).toHaveLength(2);
    expect(onChangeMock.mock.calls).toEqual([
      [[options[0]]],
      [[options[0], options[1]]],
      [[options[0], options[1], options[2]]],
      [[options[1], options[2]]],
    ]);
  });
});
