import React from "react";
import { useState } from "react";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../../../../../test/utils";

import { FormSwitch } from "../index";

const componentName = "test-form-switch";
const formName = "test-form";

function renderFormSwitch(props) {
  function FormSwitchWrapper() {
    const [checked, setChecked] = useState(false);

    return (
      <form data-testid={formName}>
        <FormSwitch
          name={componentName}
          checked={checked}
          onChange={({ target: { checked } }) => {
            setChecked(checked);
          }}
          {...props}
        />
      </form>
    );
  }

  return render(<FormSwitchWrapper />);
}

describe("FormSwitch tests", () => {
  test("FormSwitch should change value correctly", () => {
    renderFormSwitch();

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
