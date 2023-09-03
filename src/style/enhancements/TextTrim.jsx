import { css } from "styled-components";

/*
  TODO: добавить возможность
  настраивать отображаемое кол-во строк
*/
const TextTrim = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export { TextTrim };
