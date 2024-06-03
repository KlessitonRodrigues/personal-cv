import styled, { css } from 'styled-components';

import { cssSize, screenSize } from 'src/styles/utils';

export const Container = styled.div(
  () => css`
    width: 100%;
    margin: auto;
    position: relative;
  `,
);

export const Document = styled.div(() => css``);

export const Content = styled.div(
  () => css`
    padding: 0 ${cssSize(10)};
    @media (max-width: ${screenSize.tablet}px) {
      padding: 0;
    }
  `,
);

export const DocumentButtons = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: ${cssSize(2)};
    position: absolute;
    top: 0;
    left: 97%;
    z-index: 2;

    @media (max-width: ${screenSize.laptopL}px) {
      display: none;
    }
  `,
);
