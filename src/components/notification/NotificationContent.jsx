import React from "react";
import PropTypes from "prop-types";

import StyledNotificationContent from "./StyledNotificationContent";

import { Bolt } from "../icons";

NotificationContent.propTypes = {
  message: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.string,
};

export default function NotificationContent({ message, description, type }) {
  function getIcon(type) {
    return {
      info: <Bolt />,
      warn: <Bolt />,
      error: <Bolt />,
    }[type];
  }
  return (
    <StyledNotificationContent data-testid="ui-notification-content">
      <h3 data-testid="ui-notification-title">
        {type && <i>{getIcon(type)}</i>}
        {message}
      </h3>
      {description && (
        <p data-testid="ui-notification-description">{description}</p>
      )}
    </StyledNotificationContent>
  );
}
