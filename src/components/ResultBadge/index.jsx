import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "styled-components";

import { StyledResultBadge } from "./StyledResultBadge";

import { get } from "lodash-es";

const resultMap = {
  new: { short: "New", scshort: "new", full: "New person" },
  reinit: { short: "Reinit", scshort: "reinit", full: "Reinit" },
  exact: { short: "Exact", scshort: "exact", full: "Exact" },
  ha: { short: "HA", scshort: "HA", full: "High accuracy" },
  junk: { short: "Junk", scshort: "junk", full: "Junk" },
  nm: { short: "NM", scshort: "NM", full: "No matches" },
  det: { short: "Det", scshort: "det", full: "Detection only" },
};

function ResultBadge({ result, "data-testid": testId, className }) {
  return (
    <ThemeProvider theme={{ mode: result }} data-testid={testId}>
      <StyledResultBadge className={className}>
        {get(resultMap[result], "full", "-")}
      </StyledResultBadge>
    </ThemeProvider>
  );
}

ResultBadge.propTypes = {
  result: PropTypes.string.isRequired,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

export { ResultBadge, StyledResultBadge };
