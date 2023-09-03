import { css } from "styled-components";

function getRectStyles({ size }) {
  const bRadiuses = {
    medium: 2,
    large: 4,
  };

  return css`
    border-radius: ${bRadiuses[size]}px;

    &:after {
      border-radius: ${bRadiuses[size]}px;
    }
  `;
}

const rectFit = css`
  ${getRectStyles}
`;

const squareFit = css`
  border-radius: 5px;

  &:after {
    border-radius: 5px;
  }
`;

const circleFit = css`
  border-radius: 50%;

  &:after {
    border-radius: 50%;
  }
`;

export default {
  rect: rectFit,
  circle: circleFit,
  square: squareFit,
};
