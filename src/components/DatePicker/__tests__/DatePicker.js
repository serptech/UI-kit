import React from "react";
import { useState } from "react";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../../../test/utils";
import MockDate from "mockdate";

import { DatePicker } from "../index.jsx";

describe("DatePicker tests", () => {
  const onChangeMock = jest.fn();
  const onResetMock = jest.fn();
  const onStateChangeMock = jest.fn();

  beforeAll(() => {
    MockDate.set("2001-09-04");
  });
  afterEach(() => {
    onChangeMock.mockClear();
    onResetMock.mockClear();
    onStateChangeMock.mockClear();
  });
  afterAll(() => {
    onChangeMock.mockReset();
    onResetMock.mockReset();
    onStateChangeMock.mockReset();
    MockDate.reset();
  });

  const testId = "date-picker";
  function getComponentTestId(component) {
    return `${testId}-${component}`;
  }

  function DatePickerConsumer(props) {
    const [value, setValue] = useState([null, null]);

    const defaultProps = {
      valuesOnReset: [null, null],
      onReset: onResetMock,
      onStateChange: onStateChangeMock,
      initialDateFrom: null,
      initialDateTo: null,
      "data-testid": testId,
      value,
      onChange: (value) => {
        setValue(value);
        onChangeMock(value);
      },
    };

    return <DatePicker {...defaultProps} {...props} />;
  }

  function getDefaultDatePicker(props) {
    return render(<DatePickerConsumer {...props} />);
  }

  function renderDatePicker(props) {
    return getDefaultDatePicker(props);
  }

  test("DatePicker should open and close popup correctly", () => {
    renderDatePicker();

    expect(screen.getByTestId(getComponentTestId("popup"))).not.toBeVisible();

    userEvent.click(screen.getByTestId(getComponentTestId("control")));
    expect(screen.getByTestId(getComponentTestId("popup"))).toBeVisible();

    userEvent.click(screen.getByTestId(getComponentTestId("control")));
    expect(screen.getByTestId(getComponentTestId("popup"))).not.toBeVisible();
  });

  describe("DatePicker absolute", () => {
    function getDateToCompare(date) {
      /*
       * хак нужен из-за того, что react-datepicker не позволяет выставить utcOffset
       * (игнорирует проп)
       */
      const utcOffset = new Date().getTimezoneOffset();
      return new Date(new Date(date).getTime() + utcOffset * 60000);
    }

    test("DatePicker should call onChange correctly if last date is after first date", () => {
      const firstDate = getDateToCompare("2001-09-13T00:00:00.000Z");
      const lastDate = getDateToCompare("2001-09-18T00:00:00.000Z");
      const firstDateDay = "13";
      const lastDateDay = "18";
      const { getByText } = renderDatePicker();

      userEvent.click(screen.getByTestId(getComponentTestId("control")));
      userEvent.click(getByText(firstDateDay));
      userEvent.click(getByText(lastDateDay));
      userEvent.click(screen.getByTestId(getComponentTestId("control")));

      expect(onChangeMock.mock.calls).toEqual([
        [[firstDate, null]],
        [[firstDate, lastDate]],
      ]);
    });

    test("DatePicker should call onChange correctly if last date is before first date", () => {
      const firstDate = getDateToCompare("2001-09-18T00:00:00.000Z");
      const lastDate = getDateToCompare("2001-09-13T00:00:00.000Z");
      const firstDateDay = "18";
      const lastDateDay = "13";
      const { getByText } = renderDatePicker();

      userEvent.click(screen.getByTestId(getComponentTestId("control")));
      userEvent.click(getByText(firstDateDay));
      userEvent.click(getByText(lastDateDay));
      userEvent.click(screen.getByTestId(getComponentTestId("control")));

      expect(onChangeMock.mock.calls).toEqual([
        [[firstDate, null]],
        [[lastDate, firstDate]],
      ]);
    });

    test("DatePicker should set dateTo to next day after dateFrom after closing, if only dateFrom selected", () => {
      const dateFrom = getDateToCompare("2001-09-13T00:00:00.000Z");
      const dateTo = getDateToCompare("2001-09-14T00:00:00.000Z");
      const dateFromDay = "13";
      const { getByText } = renderDatePicker();

      userEvent.click(screen.getByTestId(getComponentTestId("control")));
      userEvent.click(getByText(dateFromDay));
      onChangeMock.mockClear();

      userEvent.click(screen.getByTestId(getComponentTestId("control")));

      expect(onChangeMock.mock.calls).toEqual([[[dateFrom, dateTo]]]);
    });

    test("DatePicker should reset value to resetValues on reset click", () => {
      const valuesOnReset = [
        getDateToCompare("2001-09-13T00:00:00.000Z"),
        getDateToCompare("2001-09-14T00:00:00.000Z"),
      ];
      const dateFromDay = "16";
      const dateToDay = "18";
      const { getByText } = renderDatePicker({ valuesOnReset });

      userEvent.click(screen.getByTestId(getComponentTestId("control")));
      userEvent.click(getByText(dateFromDay));
      userEvent.click(getByText(dateToDay));
      onChangeMock.mockClear();

      userEvent.click(screen.getByTestId(getComponentTestId("reset")));

      expect(onChangeMock.mock.calls).toEqual([[valuesOnReset]]);
    });
  });

  describe("DatePicker relative", () => {
    test("DatePicker should call onChange correctly on relative select change", () => {
      const expectedValue = [
        new Date("2001-09-01T00:00:00.000Z"),
        new Date("2001-09-04T00:00:00.000Z"),
      ];
      renderDatePicker();

      userEvent.click(screen.getByTestId(getComponentTestId("control")));
      userEvent.click(screen.getByTestId(getComponentTestId("relative")));
      userEvent.click(
        screen.getByTestId(getComponentTestId("relative-day-option-3"))
      );

      expect(onChangeMock.mock.calls).toEqual([[expectedValue]]);
    });
  });
});
