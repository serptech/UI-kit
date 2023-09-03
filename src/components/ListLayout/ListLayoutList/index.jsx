import React from "react";
import PropTypes from "prop-types";

import { ListLayoutListWrapper } from "./ListLayoutListWrapper";
import { StyledListLayoutList } from "./StyledListLayoutList";
import { ListLayoutNotice } from "../ListLayoutNotice";
import { ListLayoutListItem } from "./ListLayoutListItem";
import { ListLayoutListSpinner } from "./ListLayoutListSpinner";
import { Ban } from "../../icons";

function ListLayoutList({
  listRef,
  items,
  isLoading,
  renderItem,
  noItemsText,
  columns,
  className,
  "data-testid": testId,
  hasNext,
}) {
  const isFirstLoading = hasNext === undefined;
  const isListEmpty = hasNext === false && items.length === 0;

  return (
    <ListLayoutListWrapper
      data-testid={testId}
      ref={listRef}
      className={className}
    >
      {isListEmpty || isFirstLoading ? (
        isLoading ? (
          <ListLayoutListSpinner />
        ) : (
          <ListLayoutNotice
            icon={<Ban size="48" />}
            data-testid="empty-list-notice"
          >
            {noItemsText}
          </ListLayoutNotice>
        )
      ) : (
        <StyledListLayoutList columns={columns}>
          {items.map(renderItem)}
        </StyledListLayoutList>
      )}
    </ListLayoutListWrapper>
  );
}

ListLayoutList.propTypes = {
  listRef: PropTypes.object,
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  noItemsText: PropTypes.string,
  hasNext: PropTypes.bool,
  columns: PropTypes.oneOf([1, 2]),
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  "data-testid": PropTypes.string,
};

ListLayoutList.defaultProps = {
  items: [],
  renderItem: (item) => (
    <ListLayoutListItem key={item}>{item}</ListLayoutListItem>
  ),
  noItemsText: "No items",
  columns: 1,
};

ListLayoutList.Item = ListLayoutListItem;

export { ListLayoutList, StyledListLayoutList, ListLayoutListItem };
