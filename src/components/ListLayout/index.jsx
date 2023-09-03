import React from "react";
import PropTypes from "prop-types";

import { StyledListLayout } from "./StyledListLayout";
import { ListLayoutHeader } from "./ListLayoutHeader";
import { ListLayoutTitle } from "./ListLayoutTitle";
import { ListLayoutButtons } from "./ListLayoutButtons";
import { ListLayoutSearch } from "./ListLayoutSearch";
import { ListLayoutContent } from "./ListLayoutContent";
import { ListLayoutTop } from "./ListLayoutTop";
import { ListLayoutProvider } from "./ListLayoutProvider";

function ListLayout({
  top,
  title,
  buttons,
  search,
  actions,
  content,
  className,
  isTopSticky,
}) {
  const hasHeader = title || buttons;
  const hasTop = hasHeader || search || top;

  return (
    <ListLayoutProvider>
      <StyledListLayout className={className}>
        {hasTop && top ? (
          top
        ) : (
          <ListLayoutTop isSticky={isTopSticky}>
            {hasHeader && (
              <ListLayoutHeader>
                {title && <ListLayoutTitle level={1}>{title}</ListLayoutTitle>}
                {buttons && <ListLayoutButtons>{buttons}</ListLayoutButtons>}
              </ListLayoutHeader>
            )}
            {search && <ListLayoutSearch>{search}</ListLayoutSearch>}
            {actions && actions}
          </ListLayoutTop>
        )}

        {content && <ListLayoutContent>{content}</ListLayoutContent>}
      </StyledListLayout>
    </ListLayoutProvider>
  );
}

ListLayout.propTypes = {
  top: PropTypes.element,
  isTopSticky: PropTypes.bool,
  title: PropTypes.string,
  buttons: PropTypes.element,
  search: PropTypes.element,
  actions: PropTypes.element,
  content: PropTypes.element,
  className: PropTypes.string,
};

ListLayout.defaultProps = {
  isTopSticky: true,
};

export * from "./ListLayoutList";
export * from "./ListLayoutNotice";
export * from "./ListLayoutDetailed";
export * from "./ListLayoutActions";
export * from "./ListLayoutHeader";
export * from "./ListLayoutTop";
export * from "./ListLayoutSearch";
export * from "./ListLayoutProvider";
export { ListLayout };
