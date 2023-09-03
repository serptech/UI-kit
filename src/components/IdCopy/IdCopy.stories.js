import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import { IdCopy } from "./index.jsx";
import { personMock } from "../../../test/__mocks__";

storiesOf("IdCopy", module).add("default", () => {
  const pid = text("IdCopy text", personMock.pid);

  return <IdCopy>{pid}</IdCopy>;
});
