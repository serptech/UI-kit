import React from "react";
import PropTypes from "prop-types";

import { StyledEntryPersonCard } from "./StyledEntryPersonCard";
import {
  EntryCardEntryType,
  EntryCardLiveness,
  EntryCardInfo,
  EntryCardInfoColumn,
  EntryCardInfoItem,
} from "../components";
import { EntryPersonCardPhoto } from "./EntryPersonCardPhoto";

import { get } from "lodash-es";
import { timeFormat, formatFaceSize } from "../../../utils/helpers";
import { config } from "../config";

function EntryPersonCard({
  entry,
  actions,
  className,
  "data-testid": testId,
  theme,
}) {
  const result = get(config.entryType, `[${entry.result}].full`, entry.result);
  const facesizeToRender = formatFaceSize(entry.facesize);

  return (
    <StyledEntryPersonCard
      deleted={entry.deleted}
      actions={actions}
      className={className}
      data-id={entry.id}
      data-testid={testId}
      theme={theme}
    >
      <EntryPersonCardPhoto
        facesize={facesizeToRender}
        src={entry.face_image}
        fullImage={entry.full_image}
      />

      <EntryCardLiveness liveness={entry.liveness} />

      <EntryCardInfo>
        <EntryCardInfoColumn>
          <EntryCardInfoItem label="Confidence">
            <EntryCardEntryType type={entry.result}>
              {result}
            </EntryCardEntryType>
          </EntryCardInfoItem>
          <EntryCardInfoItem label="Person detected">
            {timeFormat(entry.created)}
          </EntryCardInfoItem>
        </EntryCardInfoColumn>

        <EntryCardInfoColumn>
          <EntryCardInfoItem label="Mood">{entry.mood}</EntryCardInfoItem>
          <EntryCardInfoItem label="Place of detection">
            {get(entry.source, "name")}
          </EntryCardInfoItem>
        </EntryCardInfoColumn>
      </EntryCardInfo>
    </StyledEntryPersonCard>
  );
}

EntryPersonCard.propTypes = {
  entry: PropTypes.object.isRequired,
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  className: PropTypes.string,
  "data-testid": PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark"]),
};

EntryPersonCard.defaultProps = {
  entry: {},
  "data-testid": "entry-person-card",
  theme: "light",
};

export { EntryPersonCard, StyledEntryPersonCard };
