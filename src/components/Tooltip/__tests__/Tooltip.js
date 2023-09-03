import React from "react";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../../../test/utils";

import { Tooltip } from "../index.jsx";

describe("Tooltip tests", () => {
  const onChangeMock = jest.fn();
  afterEach(() => {
    onChangeMock.mockClear();
  });

  afterAll(() => {
    onChangeMock.mockReset();
  });

  function getDefaultTooltip() {
    return render(
      <Tooltip title={"Test tooltip text"}>
        <span data-testid="tooltip-trigger-content">Text with Tooltip</span>
      </Tooltip>
    );
  }

  function renderTooltip(props) {
    return getDefaultTooltip(props);
  }

  test("Tooltip trigger open and close popup", () => {
    renderTooltip();

    expect(screen.getByTestId("tooltip-inner")).not.toBeVisible();

    userEvent.hover(screen.getByTestId("tooltip-trigger-content"));
    expect(screen.getByTestId("tooltip-inner")).toBeVisible();

    userEvent.unhover(screen.getByTestId("tooltip-trigger-content"));
    expect(screen.getByTestId("tooltip-inner")).not.toBeVisible();
  });
});
