import React from "react";
import PropTypes from "prop-types";

import { TreeMenuItem } from "./TreeMenuItem";
import { TreeMenuTippy } from "./TreeMenuTippy";
import { StyledTreeMenu } from "./StyledTreeMenu";

export function TreeMenu({ tree }) {
  function iter(item, depth) {
    const isRoot = depth === 0;
    const itemTag = isRoot ? "p" : "li";
    if (!item.items) {
      return (
        <TreeMenuItem as={itemTag} isRoot={isRoot}>
          {item.title}
        </TreeMenuItem>
      );
    }

    return (
      <TreeMenuTippy
        content={
          <StyledTreeMenu>
            {item.items.map((subitem) => iter(subitem, depth + 1))}
          </StyledTreeMenu>
        }
        interactive={true}
        arrow={false}
        placement="left-start"
        maxWidth="none"
        trigger="click"
        offset={[0, 0]}
        duration={[0, 0]}
      >
        <TreeMenuItem as={itemTag} isRoot={isRoot} key={item.title}>
          {item.title}
        </TreeMenuItem>
      </TreeMenuTippy>
    );
  }

  return iter(tree[0], 0);
}

TreeMenu.propTypes = {
  tree: PropTypes.array.isRequired,
};
