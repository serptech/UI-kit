import PropTypes from "prop-types";

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

const accuracyValues = ["y", "M", "d", "h", "m", "s"];

function formatDurationRender(duration, accuracy) {
  function matchAccuracy(type) {
    return (
      accuracyValues.findIndex((acc) => acc === accuracy) >=
      accuracyValues.findIndex((acc) => acc === type)
    );
  }

  const years =
    duration.years() && matchAccuracy("y") ? `${duration.years()}y` : ``;
  const months =
    duration.months() && matchAccuracy("M") ? `${duration.months()}m` : ``;
  const days =
    duration.days() && matchAccuracy("d") ? `${duration.days()}d` : ``;
  const hours =
    duration.hours() && matchAccuracy("h") ? `${duration.hours()}h` : ``;
  const minutes =
    duration.minutes() && matchAccuracy("m") ? `${duration.minutes()}m` : ``;
  const seconds =
    duration.seconds() && matchAccuracy("s") ? `${duration.seconds()}s` : ``;

  const result =
    `${years} ${months} ${days} ${hours} ${minutes} ${seconds}`.trim();

  return result.length === 0 ? `< 1${accuracy}` : result;
}

function DateDuration({ duration, accuracy }) {
  return formatDurationRender(dayjs.duration(duration), accuracy);
}

DateDuration.propTypes = {
  duration: PropTypes.number.isRequired,
  accuracy: PropTypes.oneOf(accuracyValues).isRequired,
};

DateDuration.defaultProps = {
  accuracy: "s",
};

export { DateDuration };
