import React from "react";
import { storiesOf } from "@storybook/react";
import { text, object } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { Header, HeaderTopMenu } from "./index.jsx";
import { HeaderTopMenuLinks, HeaderTopMenuUser } from "./HeaderTopMenu";
import { HeaderTopMenuUserDropdownItem } from "./HeaderTopMenu/HeaderTopMenuUser";
import { InfiniteDropdown } from "../InfiniteDropdown";
import { Plus, GearOutline } from "../icons/index.js";
import { generateOptions } from "../../../test/generate.js";

storiesOf("Navigation|Header", module).add("default", () => {
  const username = text("Username", "Arunoda Susiripala");

  const topLinks = object("Top links", [
    {
      id: 1,
      title: "Home - serp",
      to: "https://serptech.ru",
    },
    {
      id: 2,
      title: "Knowledgebase",
      to: "https://serptech.ru",
    },
    {
      id: 3,
      title: "Syshealth",
      to: "https://serptech.ru",
    },
  ]);

  const options = generateOptions(10);

  return (
    <Header>
      <HeaderTopMenu>
        <HeaderTopMenuLinks links={Object.values(topLinks)} />
        <HeaderTopMenuUser
          username={username}
          onLogout={action("Logout")}
          dropdown={
            <>
              <HeaderTopMenuUserDropdownItem>
                <HeaderTopMenuUserDropdownItem.Icon>
                  <Plus size={16} />
                </HeaderTopMenuUserDropdownItem.Icon>
                <HeaderTopMenuUserDropdownItem.Text>
                  Spaces
                </HeaderTopMenuUserDropdownItem.Text>
                <HeaderTopMenuUserDropdownItem.Action to="/spaces">
                  manage
                </HeaderTopMenuUserDropdownItem.Action>
                <HeaderTopMenuUserDropdownItem.Menu>
                  <InfiniteDropdown
                    value={null}
                    fetchOptions={console.log}
                    onChange={console.log}
                    options={options}
                    inline={true}
                    withSearch={true}
                    hasNext={false}
                  />
                </HeaderTopMenuUserDropdownItem.Menu>
              </HeaderTopMenuUserDropdownItem>

              <HeaderTopMenuUserDropdownItem>
                <HeaderTopMenuUserDropdownItem.Icon>
                  <GearOutline size={16} />
                </HeaderTopMenuUserDropdownItem.Icon>
                <HeaderTopMenuUserDropdownItem.Text to="/settings">
                  Settings
                </HeaderTopMenuUserDropdownItem.Text>
              </HeaderTopMenuUserDropdownItem>
            </>
          }
        />
      </HeaderTopMenu>
    </Header>
  );
});
