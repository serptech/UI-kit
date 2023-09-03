import React from "react";
import PropTypes from "prop-types";

import { StyledPersonsGroupListPersonInfoPid } from "./StyledPersonsGroupListPersonInfoPid";
import { IdFormat } from "../../../../IdFormat";

export function PersonsGroupListPersonInfoPid({ pid }) {
  return (
    <StyledPersonsGroupListPersonInfoPid>
      PID{" "}
      <span>
        <IdFormat>{pid}</IdFormat>
      </span>
    </StyledPersonsGroupListPersonInfoPid>
  );
}

PersonsGroupListPersonInfoPid.propTypes = {
  pid: PropTypes.string.isRequired,
};
