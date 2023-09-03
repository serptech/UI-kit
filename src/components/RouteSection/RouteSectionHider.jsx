import styled, { css } from "styled-components";

import StyledNoticeContainer from "../../components/Notice/StyledNoticeContainer";

const centeredStyles = css`
  height: 100%;
  align-items: center;
  justify-content: center;

  > ${StyledNoticeContainer} {
    position: relative;
    top: -24px;
  }
`;

const hiddenStyles = css`
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;
/**
 * Компонент нужен только для того,
 * чтобы children рендерились всегда (и не срабатывал CDM несколько раз)
 */
const RouteSectionHider = styled.div`
  display: flex;
  width: 100%;
  flex: 100%;
  flex-direction: column;

  ${({ isCentered }) => isCentered && centeredStyles}
  ${({ isHidden }) => isHidden && hiddenStyles}
`;

export default RouteSectionHider;
