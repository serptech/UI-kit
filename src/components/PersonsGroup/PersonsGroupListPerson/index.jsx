import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { StyledPersonsGroupListPerson } from "./StyledPersonsGroupListPerson";
import { PersonsGroupListPersonInfo } from "./PersonsGroupListPersonInfo";
import { PersonsGroupListPersonNotFoundNotice } from "./PersonsGroupListPersonNotFoundNotice";
import { PersonsGroupListPersonTypeSelect } from "./PersonsGroupListPersonTypeSelect";
import { PersonsGroupListPersonButton } from "./PersonsGroupListPersonButton";
import { PersonsGroupListPersonSpinner } from "./PersonsGroupListPersonSpinner";

/**
 *
 * Компонент для вывода результата поиска персоны
 * на листе персон листов
 */

export function PersonsGroupListPerson({
  person,
  pid,
  fetchPerson,
  isPersonFetching,
  error,
  searchType,
  onSearchTypeChange,
  onRemove,
  onAdd,
  isAddAvailable,
  isRemoveAvailable,
  className,
  "data-testid": testId,
  offsetTop,
}) {
  useEffect(() => {
    if (pid && fetchPerson) {
      fetchPerson(pid);
    }
  }, [pid]);

  return (
    <StyledPersonsGroupListPerson
      className={className}
      data-testid={testId}
      offsetTop={offsetTop}
    >
      {(isPersonFetching || !person) && !error ? (
        <PersonsGroupListPersonSpinner />
      ) : error ? (
        <PersonsGroupListPersonNotFoundNotice />
      ) : (
        <React.Fragment>
          <PersonsGroupListPersonInfo
            photo={person.initial_face_image}
            pid={person.pid}
          />
          <PersonsGroupListPersonTypeSelect
            type={searchType}
            onChange={onSearchTypeChange}
          />
          {searchType.value.includes("excludes") && (
            <PersonsGroupListPersonButton
              isFullWidth={true}
              onClick={onAdd}
              theme="dark"
              isDisabled={!isAddAvailable}
              data-testid="add-selected"
            >
              Add to selected
            </PersonsGroupListPersonButton>
          )}
          {searchType.value.includes("includes") && (
            <PersonsGroupListPersonButton
              isFullWidth={true}
              theme="light"
              onClick={onRemove}
              isDisabled={!isRemoveAvailable}
              data-testid="delete-selected"
            >
              Remove from selected
            </PersonsGroupListPersonButton>
          )}
        </React.Fragment>
      )}
    </StyledPersonsGroupListPerson>
  );
}

PersonsGroupListPerson.propTypes = {
  person: PropTypes.object.isRequired,
  pid: PropTypes.string.isRequired,
  fetchPerson: PropTypes.func,
  isPersonFetching: PropTypes.bool.isRequired,
  error: PropTypes.object,
  searchType: PropTypes.object,
  onSearchTypeChange: PropTypes.func,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  isAddAvailable: PropTypes.bool.isRequired,
  isRemoveAvailable: PropTypes.bool.isRequired,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
  offsetTop: PropTypes.number,
};
