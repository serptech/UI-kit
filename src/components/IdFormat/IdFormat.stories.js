import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import { IdFormat } from "./index.jsx";
import { personMock } from "../../../test/__mocks__";

storiesOf("IdFormat", module).add("default", () => {
  const pid = text("IdFormat text", personMock.pid);

  return <IdFormat>{pid}</IdFormat>;
});
