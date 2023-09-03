import React from "react";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../../../test/utils";

import { ListItemPopup } from "../index.jsx";

describe("ListItemPopup tests", () => {
  const onChangeMock = jest.fn();
  afterEach(() => {
    onChangeMock.mockClear();
  });

  afterAll(() => {
    onChangeMock.mockReset();
  });

  function getDefaultListItemPopup() {
    return render(
      <ListItemPopup
        trigger={({ ref, openPortal }) => (
          <button data-testid="button-open" ref={ref} onClick={openPortal}>
            open
          </button>
        )}
      >
        {({ closePortal }) => (
          <React.Fragment>
            <button data-testid="button-close" onClick={closePortal}>
              close
            </button>
            <span data-testid="list-item-popup-content">
              Popup content example
            </span>
          </React.Fragment>
        )}
      </ListItemPopup>
    );
  }

  function renderListItemPopup(props) {
    return getDefaultListItemPopup(props);
  }

  test("ListItemPopup trigger open and close popup", () => {
    renderListItemPopup();

    userEvent.click(screen.getByTestId("button-open"));
    expect(screen.getByTestId("list-item-popup-content")).toBeVisible();

    userEvent.click(screen.getByTestId("button-close"));
    expect(screen.getByTestId("list-item-popup-content")).not.toBeVisible();
  });
});
