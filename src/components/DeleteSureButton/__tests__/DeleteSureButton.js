import React from "react";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../../../test/utils";

import { DeleteSureButton } from "../index.jsx";

describe("DeleteSureButton tests", () => {
  const onDeleteMock = jest.fn();

  afterEach(() => {
    onDeleteMock.mockClear();
  });
  afterAll(() => {
    onDeleteMock.mockReset();
  });

  const defaultProps = {
    onDelete: onDeleteMock,
    isDisabled: false,
  };

  function getDefaultDeleteSureButton(props) {
    return render(<DeleteSureButton {...defaultProps} {...props} />);
  }

  function renderDeleteSureButton(props) {
    return getDefaultDeleteSureButton(props);
  }

  test("DeleteSureButton renders inside text correctly", () => {
    const deleteText = "some delete text";
    const sureText = "some sure text";

    renderDeleteSureButton({
      deleteText,
      sureText,
    });

    expect(screen.getByTestId("delete-button")).toHaveTextContent(deleteText);

    userEvent.hover(screen.getByTestId("delete-button"));
    expect(screen.getByTestId("delete-button")).toHaveTextContent(deleteText);

    userEvent.click(screen.getByTestId("delete-button"));
    expect(screen.getByTestId("delete-button")).toHaveTextContent(sureText);

    userEvent.unhover(screen.getByTestId("delete-button"));
    expect(screen.getByTestId("delete-button")).toHaveTextContent(deleteText);

    userEvent.click(screen.getByTestId("delete-button"));
    userEvent.click(screen.getByTestId("delete-button"));
    expect(screen.getByTestId("delete-button")).toHaveTextContent(deleteText);
  });

  test("DeleteSureButton calls onDelete callback correctly", () => {
    renderDeleteSureButton();

    userEvent.click(screen.getByTestId("delete-button"));
    userEvent.click(screen.getByTestId("delete-button"));

    expect(onDeleteMock).toHaveBeenCalledTimes(1);
  });
});
