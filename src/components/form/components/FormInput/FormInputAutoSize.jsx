import styled from "styled-components";

import { StyledFormInput } from "./StyledFormInput";
import ContentEditable from "react-contenteditable";

import { getTestId } from "../../utils";

function addNameToTarget(name, handler) {
  return function (ev) {
    if (typeof handler !== "function") {
      return handler;
    }

    const event = { ...ev };

    event.target.name = name;

    handler(event);
  };
}

const FormInputAutoSize = styled(StyledFormInput).attrs(
  ({ name, value, onChange, onBlur, onFocus, "data-testid": testId }) => ({
    as: ContentEditable,
    html: value,
    onChange: addNameToTarget(name, onChange),
    onBlur: addNameToTarget(name, onBlur),
    onFocus: addNameToTarget(name, onFocus),
    onPaste(ev) {
      ev.preventDefault();
      const text = ev.clipboardData.getData("text");
      document.execCommand("insertText", false, text);
    },
    "data-testid": getTestId(name, testId),
  })
)`
  display: inline-block;
  white-space: nowrap;
  user-select: text;
  cursor: text;
`;

export { FormInputAutoSize };
