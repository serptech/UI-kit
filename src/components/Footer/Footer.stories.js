import React from "react";
import { storiesOf } from "@storybook/react";

import { Footer } from "./index.jsx";
import { TextBold } from "../../components/Text/TextBold";
import { TextThin } from "../../components/Text/TextThin";

storiesOf("Footer", module).add("default", () => {
  return (
    <Footer
      Disclamer={
        <React.Fragment>
          <p>
            Your data is safe. The cloud does not keep any data except for fully
            impersonalized, in the database. All data is kept on servers in Russia.
          </p>
          <span>© 2023 SERP</span>
        </React.Fragment>
      }
      Credits={
        <React.Fragment>
          <TextBold>serptech.ru</TextBold>
          <br />
          <TextThin>API v0.1</TextThin>
        </React.Fragment>
      }
    />
  );
});
