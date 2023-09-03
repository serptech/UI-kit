import React from "react";
import { useState } from "react";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../../../../../test/utils";

import { FormCheckbox } from "../index";

const formName = "test-form";
const componentName = "test-form-checkbox";

function renderFormCheckbox() {
  function FormCheckboxWrapper() {
    const [checked, setChecked] = useState(false);

    return (
      <form data-testid={formName}>
        <FormCheckbox
          name={componentName}
          checked={checked}
          onChange={({ target: { checked } }) => setChecked(checked)}
        />
      </form>
    );
  }

  return render(<FormCheckboxWrapper />);
}

describe("FormCheckbox tests", () => {
  test("FormCheckbox should change checked state by click", () => {
    renderFormCheckbox();

    expect(screen.getByTestId(formName)).toHaveFormValues({
      [componentName]: false,
    });

    userEvent.click(screen.getByTestId(componentName));

    expect(screen.getByTestId(formName)).toHaveFormValues({
      [componentName]: true,
    });

    userEvent.click(screen.getByTestId(componentName));

    expect(screen.getByTestId(formName)).toHaveFormValues({
      [componentName]: false,
    });
  });
});
