import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { Uploader } from "./index.jsx";

storiesOf("Data Entry|Uploader", module).add("default", () => {
  const isDisabled = boolean(false);
  const multiple = boolean(false);

  return (
    <Uploader
      onUpload={action("On upload")}
      isDisabled={isDisabled}
      multiple={multiple}
    >
      Upload here
    </Uploader>
  );
});
