import React from "react";
import { storiesOf } from "@storybook/react";
import { object, boolean } from "@storybook/addon-knobs";

import { PersonsGroupPersonDetailed } from "./index";

import { personMock } from "../../../../test/__mocks__";

storiesOf("Persons Groups| PersonDetail", module).add("default", () => {
  const person = object("Person", personMock);

  const isLoading = boolean("isLoading", false);
  const isPersonNotExists = boolean("isPersonNotExists", false);

  return (
    <PersonsGroupPersonDetailed
      person={!isPersonNotExists && person}
      isLoading={isLoading}
      isPersonNotExists={isPersonNotExists}
    />
  );
});
