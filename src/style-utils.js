import { css } from "styled-components";

const sizes = { small: 576, medium: 768, large: 992, xlarge: 1200 };

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const size = sizes[label];
  accumulator[label] = (...args) => css`
    @media (min-width: ${size}px) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
