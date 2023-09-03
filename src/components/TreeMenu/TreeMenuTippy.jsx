import styled from "styled-components";
import Tippy from "@tippyjs/react";

export const TreeMenuTippy = styled(Tippy)`
  outline: none;

  .tippy-content {
    background: rgba(255, 255, 255, 0.87);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(168, 179, 190, 0.3);
  }
`;
