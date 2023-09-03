import styled, { css } from "styled-components";

function getStyles({ isCentered }) {
  return (
    isCentered &&
    css`
      justify-content: center;
      align-items: center;
    `
  );
}

const CardContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 80px rgba(162, 182, 189, 0.2);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  ${getStyles}
`;

export { CardContainer };
