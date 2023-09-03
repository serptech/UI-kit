import React from "react";
import { useState, useMemo } from "react";

import { render } from "../../../../../../test/utils";
import userEvent from "@testing-library/user-event";
import { generateOptions } from "../../../../../../test/generate";
import { screen } from "@testing-library/react";

import { FormFromToPicker } from "../index.jsx";
import { FormDropdown } from "../../FormDropdown";

describe("FormFromToPicker tests", () => {
  const onChangeMock = jest.fn();
  const onResetMock = jest.fn();
  const onStateChangeMock = jest.fn();

  afterEach(() => {
    onChangeMock.mockClear();
    onResetMock.mockClear();
    onStateChangeMock.mockClear();
  });
  afterAll(() => {
    onChangeMock.mockReset();
    onResetMock.mockReset();
    onStateChangeMock.mockReset();
  });

  const testId = "form-from-to-picker";
  function getComponentTestId(component) {
    return `${testId}-${component}`;
  }

  const fromOptions = generateOptions(10);
  const toOptions = generateOptions(10);

  function FormFromToPickerConsumer(props) {
    const [value, setValue] = useState([null, null]);

    const items = useMemo(
      () => [
        {
          label: "From",
          value: "from",
          Component: (
            <FormDropdown
              value={value[0]}
              onChange={(selected) => {
                setValue([selected, value[1]]);
                onChangeMock([selected, value[1]]);
              }}
              options={fromOptions}
              data-testid={`${testId}-from-dropdown`}
              inline={true}
            />
          ),
        },
        {
          label: "To",
          value: "to",
          Component: (
            <FormDropdown
              value={value[1]}
              onChange={(selected) => {
                setValue([value[0], selected]);
                onChangeMock([value[0], selected]);
              }}
              options={toOptions}
              data-testid={`${testId}-to-dropdown`}
              inline={true}
            />
          ),
        },
      ],
      [value, setValue]
    );

    const defaultProps = {
      valuesOnReset: [null, null],
      onReset: onResetMock,
      onStateChange: onStateChangeMock,
      "data-testid": testId,
      value,
      onChange: (value) => {
        setValue(value);
        onChangeMock(value);
      },
    };

    return (
      <FormFromToPicker {...defaultProps} {...props}>
        <FormFromToPicker.Tabs items={items} data-testid={testId} />
      </FormFromToPicker>
    );
  }

  function getDefaultFormFromToPicker(props) {
    return render(<FormFromToPickerConsumer {...props} />);
  }

  function renderFormFromToPicker(props) {
    return getDefaultFormFromToPicker(props);
  }

  test("FormFromToPicker should open and close popup correctly", () => {
    renderFormFromToPicker();

    expect(screen.getByTestId(getComponentTestId("popup"))).not.toBeVisible();

    userEvent.click(screen.getByTestId(getComponentTestId("control")));
    expect(screen.getByTestId(getComponentTestId("popup"))).toBeVisible();

    userEvent.click(screen.getByTestId(getComponentTestId("control")));
    expect(screen.getByTestId(getComponentTestId("popup"))).not.toBeVisible();
  });

  test("FormFromToPicker should call onChange correctly on FROM and TO values select", () => {
    renderFormFromToPicker();

    const fromOption = fromOptions[0];
    const toOption = toOptions[0];

    userEvent.click(screen.getByTestId(getComponentTestId("control")));

    userEvent.click(screen.getByTestId(getComponentTestId("from")));
    userEvent.click(
      screen.getByTestId(
        getComponentTestId(`from-dropdown-option-${fromOption.value}`)
      )
    );

    userEvent.click(screen.getByTestId(getComponentTestId("to")));
    userEvent.click(
      screen.getByTestId(
        getComponentTestId(`to-dropdown-option-${toOption.value}`)
      )
    );

    expect(onChangeMock.mock.calls).toEqual([
      [[fromOption, null]],
      [[fromOption, toOption]],
    ]);
  });

  test("FormFromToPicker should reset value to resetValues on reset click", () => {
    const valuesOnReset = [null, null];
    const fromOption = fromOptions[0];
    const toOption = toOptions[0];

    renderFormFromToPicker({
      valuesOnReset,
    });

    userEvent.click(screen.getByTestId(getComponentTestId("control")));

    userEvent.click(screen.getByTestId(getComponentTestId("from")));
    userEvent.click(
      screen.getByTestId(
        getComponentTestId(`from-dropdown-option-${fromOption.value}`)
      )
    );

    userEvent.click(screen.getByTestId(getComponentTestId("to")));
    userEvent.click(
      screen.getByTestId(
        getComponentTestId(`to-dropdown-option-${toOption.value}`)
      )
    );
    onChangeMock.mockClear();

    userEvent.click(screen.getByTestId(getComponentTestId("reset")));

    expect(onChangeMock.mock.calls).toEqual([[valuesOnReset]]);
  });
});
