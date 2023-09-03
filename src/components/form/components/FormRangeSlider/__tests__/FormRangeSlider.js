import React from "react";
import { useState } from "react";

import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../../../../../test/utils";

import { FormRangeSlider } from "../index";

const componentName = "test-form-range-slider";

const onChangeMock = jest.fn();

afterEach(() => {
  onChangeMock.mockClear();
});

afterAll(() => {
  onChangeMock.mockReset();
});

function renderFormRangeSlider(props) {
  function FormRangeSliderWrapper() {
    const [value, setValue] = useState([0, 99]);

    return (
      <form data-testid="test-form">
        <FormRangeSlider
          data-testid={componentName}
          from={value[0]}
          to={value[1]}
          onChange={(ev) => {
            setValue(ev);
            onChangeMock(ev);
          }}
          {...props}
        />
      </form>
    );
  }

  return render(<FormRangeSliderWrapper />);
}

describe("FormRangeSlider tests", () => {
  test("FormRangeSlider should render initial values correctly", () => {
    renderFormRangeSlider();

    expect(
      screen.getByTestId(componentName).querySelector('div[data-handle="0"]')
    ).toHaveTextContent(0);
    expect(
      screen.getByTestId(componentName).querySelector('div[data-handle="1"]')
    ).toHaveTextContent(99);
  });

  /**
   * TODO: Подумать как написать этот тест
   */
  test.skip("FormRangeSlider should change value correctly", () => {
    renderFormRangeSlider();

    /**
     * реализация тестирования drag and drop
     * https://github.com/testing-library/react-testing-library/issues/268#issuecomment-493772289
     */
    fireEvent.mouseDown(
      screen.getByTestId(componentName).querySelector('div[data-handle="0"]'),
      { clientX: 0, clientY: 0 }
    );
    fireEvent.mouseMove(screen.getByTestId(componentName), {
      clientX: 1,
      clientY: 0,
    });
    fireEvent.mouseUp(screen.getByTestId(componentName), {
      clientX: 1,
      clientY: 0,
    });
  });
});
