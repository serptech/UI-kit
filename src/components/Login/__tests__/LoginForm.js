import React from "react";

import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../../../test/utils";

import { LoginForm } from "../LoginForm";

describe("LoginForm tests", () => {
  const loginMock = jest.fn();
  const authErrorMock = null;

  afterEach(() => {
    loginMock.mockClear();
  });

  function renderLoginForm(props) {
    return render(
      <LoginForm
        login={loginMock}
        authError={authErrorMock}
        isLogging={false}
        {...props}
      />
    );
  }

  test("LoginForm submits with correct data", async () => {
    renderLoginForm();

    userEvent.type(screen.getByPlaceholderText("username"), "Jane Doe");
    userEvent.type(
      screen.getByPlaceholderText("password"),
      "strong_password_here"
    );

    userEvent.click(screen.getByRole("button", { type: /submit/i }));

    await waitFor(() => {
      expect(loginMock.mock.calls).toEqual([
        [{ username: "Jane Doe", password: "strong_password_here" }],
      ]);
    });
  });

  test("LoginForm does not call login when data is not valid", async () => {
    renderLoginForm();

    userEvent.click(screen.getByRole("button", { type: /submit/i }));

    await waitFor(() => {
      expect(loginMock.mock.calls).toEqual([]);
    });
  });

  test("LoginForm renders validation errors", async () => {
    renderLoginForm();

    userEvent.click(screen.getByRole("button", { type: /submit/i }));

    await waitFor(() => {
      expect(screen.getByTestId("login-form-error").innerHTML).toEqual(
        "Required fields are empty"
      );
    });
  });
});
