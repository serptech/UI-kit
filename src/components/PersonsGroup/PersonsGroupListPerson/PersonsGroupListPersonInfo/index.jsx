import React from "react";
import PropTypes from "prop-types";

import { StyledPersonsGroupListPersonInfo } from "./StyledPersonsGroupListPersonInfo";
import { PersonsGroupListPersonInfoPhoto } from "./PersonsGroupListPersonInfoPhoto";
import { PersonsGroupListPersonInfoPid } from "./PersonsGroupListPersonInfoPid/index";

export function PersonsGroupListPersonInfo({ photo, pid }) {
  return (
    <StyledPersonsGroupListPersonInfo>
      <PersonsGroupListPersonInfoPhoto src={photo} />
      <PersonsGroupListPersonInfoPid pid={pid} />
    </StyledPersonsGroupListPersonInfo>
  );
}

PersonsGroupListPersonInfo.propTypes = {
  photo: PropTypes.string.isRequired,
  pid: PropTypes.string.isRequired,
};
