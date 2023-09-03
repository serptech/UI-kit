import React from "react";
import PropTypes from "prop-types";

import { StyledPersonsGroupPersonDetailed } from "./StyledPersonsGroupPersonDetailed";

import {
  PersonCardDetailed,
  PersonCardDetailedActions,
  PersonCardDetailedDataItemLabel as PersonLabel,
  PersonCardDetailedDataItemValue as PersonValue,
  PersonCardDetailedDataItemIdValue as PersonIdValue,
  PersonCardDetailedDataItemPhoto as PersonPhoto,
} from "../../PersonCardDetailed";
import { IdFormat } from "../../IdFormat";

import { formatSex, formatDate, formatFaceSize } from "../../../utils";
import { noimageid } from "../../../assets/images";

function PersonsGroupPersonDetailed({
  person,
  fetchPerson,
  pid,
  isLoading,
  isPersonNotExists,
  actions,
  offsetTop,
  className,
  "data-testid": testId,
}) {
  return (
    <StyledPersonsGroupPersonDetailed
      person={person}
      fetchPerson={fetchPerson}
      pid={pid}
      isLoading={isLoading}
      isPersonNotExists={isPersonNotExists}
      className={className}
      offsetTop={offsetTop}
      data-testid={testId}
    >
      {person && !isPersonNotExists && (
        <>
          <PersonCardDetailed.Data>
            <PersonCardDetailed.DataItem>
              <PersonLabel>Photo</PersonLabel>
              <PersonValue>
                <PersonPhoto
                  src={person.initial_face_image || noimageid}
                  facesize={formatFaceSize(person.initial_facesize)}
                />
              </PersonValue>
            </PersonCardDetailed.DataItem>
            <PersonCardDetailed.DataItem>
              <PersonLabel>PID</PersonLabel>
              <PersonIdValue>
                <IdFormat>{person.pid}</IdFormat>
              </PersonIdValue>
            </PersonCardDetailed.DataItem>
            <PersonCardDetailed.DataItem>
              <PersonLabel>Age</PersonLabel>
              <PersonValue>{person.age}</PersonValue>
            </PersonCardDetailed.DataItem>
            <PersonCardDetailed.DataItem>
              <PersonLabel>Sex</PersonLabel>
              <PersonValue>{formatSex(person.sex)}</PersonValue>
            </PersonCardDetailed.DataItem>
            <PersonCardDetailed.DataItem>
              <PersonLabel>Card created</PersonLabel>
              <PersonValue>{formatDate(person.pid_created)}</PersonValue>
            </PersonCardDetailed.DataItem>
            <PersonCardDetailed.DataItem>
              <PersonLabel>Place of first entry</PersonLabel>
              <PersonValue>{person.pid_source.name}</PersonValue>
            </PersonCardDetailed.DataItem>
            <PersonCardDetailed.DataItem>
              <PersonLabel>Total entries</PersonLabel>
              <PersonValue isZeroEmpty={true}>{person.total}</PersonValue>
            </PersonCardDetailed.DataItem>
            <PersonCardDetailed.DataItem>
              <PersonLabel>Exact entries</PersonLabel>
              <PersonValue isZeroEmpty={true}>{person.exact}</PersonValue>
            </PersonCardDetailed.DataItem>
            <PersonCardDetailed.DataItem>
              <PersonLabel>HA entries</PersonLabel>
              <PersonValue isZeroEmpty={true}>{person.ha}</PersonValue>
            </PersonCardDetailed.DataItem>
            <PersonCardDetailed.DataItem>
              <PersonLabel>Junk entries</PersonLabel>
              <PersonValue isZeroEmpty={true}>{person.junk}</PersonValue>
            </PersonCardDetailed.DataItem>
          </PersonCardDetailed.Data>
          {actions && (
            <PersonCardDetailedActions>{actions}</PersonCardDetailedActions>
          )}
        </>
      )}
    </StyledPersonsGroupPersonDetailed>
  );
}

PersonsGroupPersonDetailed.propTypes = {
  person: PropTypes.object,
  fetchPerson: PropTypes.func,
  pid: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  isPersonNotExists: PropTypes.bool,
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  offsetTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

PersonsGroupPersonDetailed.defaultProps = {
  "data-testid": "persons-group-person-detailed",
};

export { PersonsGroupPersonDetailed, StyledPersonsGroupPersonDetailed };
