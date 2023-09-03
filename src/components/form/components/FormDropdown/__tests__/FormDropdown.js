import React from "react";
import { useState } from "react";

import { screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../../../../../test/utils";
import { generateOptions } from "../../../../../../test/generate";

import { FormDropdown } from "../index";

const options = generateOptions(5);

const componentName = "test-form-dropdown";
const optionSelector = 'li[role="option"]';
const defaultOption = {
  label: "default",
  value: "some_default_value",
  default: true,
};
const singleOption = {
  label: "single",
  value: "some_single_value",
  single: true,
};

const onChangeMock = jest.fn();

afterEach(() => {
  onChangeMock.mockClear();
});

afterAll(() => {
  onChangeMock.mockReset();
});

function renderFormDropdown(props = {}) {
  function FormDropdownWrapper() {
    // eslint-disable-next-line react/prop-types
    const [value, setValue] = useState(props.multiple ? [] : null);

    return (
      <form data-testid="test-form">
        <FormDropdown
          name={componentName}
          options={options}
          value={value}
          onChange={(ev) => {
            setValue(ev);
            onChangeMock(ev);
          }}
          {...props}
        />
      </form>
    );
  }

  return render(<FormDropdownWrapper />);
}

describe("FormDropdown tests", () => {
  test("FormDropdown menu should be visible after click on control", () => {
    renderFormDropdown();

    expect(screen.getByTestId(`${componentName}-menu`)).not.toBeVisible();

    userEvent.click(screen.getByTestId(`${componentName}-control`));

    expect(screen.getByTestId(`${componentName}-menu`)).toBeVisible();
  });

  test("FormDropdown menu should not be visible after click on control if dropdown is disabled", () => {
    renderFormDropdown({ disabled: true });

    expect(screen.getByTestId(`${componentName}-menu`)).not.toBeVisible();

    userEvent.click(screen.getByTestId(`${componentName}-control`));

    expect(screen.getByTestId(`${componentName}-menu`)).not.toBeVisible();
  });

  test("FormDropdown menu should render correct number of options", () => {
    renderFormDropdown();

    userEvent.click(screen.getByTestId(`${componentName}-control`));

    expect(
      screen
        .getByTestId(`${componentName}-menu`)
        .querySelectorAll(optionSelector)
    ).toHaveLength(options.length);
  });

  test("FormDropdown control should render selected item correctly and call onChange prop", () => {
    renderFormDropdown();

    userEvent.click(screen.getByTestId(`${componentName}-control`));
    userEvent.click(
      screen.getByTestId(`${componentName}-option-${options[0].value}`)
    );

    expect(screen.getByTestId(`${componentName}-control`)).toHaveTextContent(
      options[0].label
    );

    expect(onChangeMock.mock.calls[0][0]).toEqual(options[0]);
  });

  test("FormDropdown should ignore disabled options select", () => {
    const disabledOptionIndex = 2;
    renderFormDropdown({
      options: options.map((o, i) =>
        i === disabledOptionIndex ? { ...o, disabled: true } : o
      ),
    });

    userEvent.click(screen.getByTestId(`${componentName}-control`));
    userEvent.click(
      screen.getByTestId(
        `${componentName}-option-${options[disabledOptionIndex].value}`
      )
    );

    expect(
      screen.getByTestId(`${componentName}-control`)
    ).not.toHaveTextContent(options[disabledOptionIndex].label);
  });

  test("FormDropdown menu should select option on keyboard arrow press", () => {
    renderFormDropdown();

    userEvent.click(screen.getByTestId(`${componentName}-control`));
    fireEvent.keyDown(screen.getByTestId(`${componentName}-control`), {
      key: "ArrowDown",
      code: 40,
    });

    expect(onChangeMock.mock.calls[0][0]).toEqual(options[1]);
  });

  test("FormDropdown with search menu should not select option on keyboard arrow press", () => {
    renderFormDropdown({ withSearch: true });

    userEvent.click(screen.getByTestId(`${componentName}-control`));
    fireEvent.keyDown(screen.getByTestId(`${componentName}-control`), {
      key: "ArrowDown",
      code: 40,
    });

    expect(onChangeMock.mock.calls).toHaveLength(0);
  });

  test("FormDropdown should set default option on initial render, if value is not setted", () => {
    const options = [defaultOption].concat(generateOptions(5));

    renderFormDropdown({
      options,
    });

    expect(onChangeMock.mock.calls[0][0]).toEqual(defaultOption);
    expect(screen.getByTestId(`${componentName}-control`)).toHaveTextContent(
      defaultOption.label
    );
  });

  test("FormDropdown should not set default option on initial render, if value is not setted", () => {
    const options = [defaultOption].concat(generateOptions(5));

    renderFormDropdown({
      options,
      value: options[1],
    });

    expect(onChangeMock.mock.calls).toHaveLength(0);
    expect(screen.getByTestId(`${componentName}-control`)).toHaveTextContent(
      options[1].label
    );
  });

  describe("FormDropdown multiple", () => {
    test("FormDropdown multiple should correctly handle multiple values", () => {
      renderFormDropdown({
        multiple: true,
      });

      userEvent.click(screen.getByTestId(`${componentName}-control`));
      userEvent.click(
        screen.getByTestId(`${componentName}-option-${options[0].value}`)
      );
      userEvent.click(
        screen.getByTestId(`${componentName}-option-${options[3].value}`)
      );
      userEvent.click(
        screen.getByTestId(`${componentName}-option-${options[4].value}`)
      );

      expect(onChangeMock.mock.calls[0][0]).toEqual([options[0]]);
      expect(onChangeMock.mock.calls[1][0]).toEqual([options[0], options[3]]);
      expect(onChangeMock.mock.calls[2][0]).toEqual([
        options[0],
        options[3],
        options[4],
      ]);
    });

    test("FormDropdown multiple should remove all selected options after single option was selected", () => {
      const options = [singleOption].concat(generateOptions(5));

      renderFormDropdown({
        multiple: true,
        options,
      });

      userEvent.click(screen.getByTestId(`${componentName}-control`));
      userEvent.click(
        screen.getByTestId(`${componentName}-option-${options[1].value}`)
      );
      userEvent.click(
        screen.getByTestId(`${componentName}-option-${options[3].value}`)
      );
      userEvent.click(
        screen.getByTestId(`${componentName}-option-${options[4].value}`)
      );
      onChangeMock.mockClear();
      userEvent.click(
        screen.getByTestId(`${componentName}-option-${singleOption.value}`)
      );
      expect(onChangeMock.mock.calls[0][0]).toEqual([singleOption]);
    });

    test("FormDropdown multiple should render reset button and hide it if non items selected", () => {
      renderFormDropdown({
        multiple: true,
      });

      expect(
        screen.queryByTestId(`${componentName}-reset`)
      ).not.toBeInTheDocument();

      userEvent.click(screen.getByTestId(`${componentName}-control`));
      userEvent.click(
        screen.getByTestId(`${componentName}-option-${options[1].value}`)
      );

      expect(
        screen.queryByTestId(`${componentName}-reset`)
      ).toBeInTheDocument();

      userEvent.click(screen.queryByTestId(`${componentName}-reset`));

      expect(
        screen.queryByTestId(`${componentName}-reset`)
      ).not.toBeInTheDocument();
    });

    test("FormDropdown multiple should reset selected to empty if non default option after reset button click", () => {
      const placeholder = "select smth";
      renderFormDropdown({
        multiple: true,
        placeholder,
      });

      userEvent.click(screen.getByTestId(`${componentName}-control`));
      userEvent.click(
        screen.getByTestId(`${componentName}-option-${options[1].value}`)
      );
      userEvent.click(
        screen.getByTestId(`${componentName}-option-${options[3].value}`)
      );
      userEvent.click(
        screen.getByTestId(`${componentName}-option-${options[4].value}`)
      );
      onChangeMock.mockClear();
      userEvent.click(screen.getByTestId(`${componentName}-reset`));

      expect(onChangeMock.mock.calls[0][0]).toEqual([]);
      expect(screen.getByTestId(`${componentName}-control`)).toHaveTextContent(
        placeholder
      );
    });

    test("FormDropdown multiple should reset selected to default after reset button click", () => {
      const options = [defaultOption].concat(generateOptions(5));

      renderFormDropdown({
        multiple: true,
        options,
      });

      userEvent.click(screen.getByTestId(`${componentName}-control`));
      userEvent.click(
        screen.getByTestId(`${componentName}-option-${options[1].value}`)
      );
      userEvent.click(
        screen.getByTestId(`${componentName}-option-${options[3].value}`)
      );
      userEvent.click(
        screen.getByTestId(`${componentName}-option-${options[4].value}`)
      );
      onChangeMock.mockClear();
      userEvent.click(screen.getByTestId(`${componentName}-reset`));

      expect(onChangeMock.mock.calls[0][0]).toEqual([defaultOption]);
      expect(screen.getByTestId(`${componentName}-control`)).toHaveTextContent(
        defaultOption.label
      );
    });

    test("FormDropdown multiple should reset selected to default after user unselects all items", () => {
      const options = [defaultOption].concat(generateOptions(5));

      renderFormDropdown({
        multiple: true,
        options,
      });

      userEvent.click(screen.getByTestId(`${componentName}-control`));
      userEvent.click(
        screen.getByTestId(`${componentName}-option-${options[1].value}`)
      );
      userEvent.click(
        screen.getByTestId(`${componentName}-option-${options[3].value}`)
      );
      userEvent.click(
        screen.getByTestId(`${componentName}-option-${options[1].value}`)
      );
      onChangeMock.mockClear();
      userEvent.click(
        screen.getByTestId(`${componentName}-option-${options[3].value}`)
      );

      expect(onChangeMock.mock.calls[0][0]).toEqual([defaultOption]);
      expect(screen.getByTestId(`${componentName}-control`)).toHaveTextContent(
        defaultOption.label
      );
    });

    test("FormDropdown multiple should set default option on initial render, if value is not setted", () => {
      const options = [defaultOption].concat(generateOptions(5));

      renderFormDropdown({
        options,
        multiple: true,
      });

      expect(onChangeMock.mock.calls[0][0]).toEqual([defaultOption]);
      expect(screen.getByTestId(`${componentName}-control`)).toHaveTextContent(
        defaultOption.label
      );
    });

    test("FormDropdown should not set default option on initial render, if value is not setted", () => {
      const options = [defaultOption].concat(generateOptions(5));

      renderFormDropdown({
        options,
        multiple: true,
        value: [options[1]],
      });

      expect(onChangeMock.mock.calls).toHaveLength(0);
      expect(screen.getByTestId(`${componentName}-control`)).toHaveTextContent(
        options[1].label
      );
    });
  });
});
