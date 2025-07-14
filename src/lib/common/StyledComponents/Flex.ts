import styled, { css } from 'styled-components';

import { cssSize, screenSize } from 'src/styles/utils';

const FlexItems = styled.div<Props.CssProps>(
  ({ w, h, fit }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${w && `width: ${w};`}
    ${h && `height: ${h};`}
    ${fit && `width: fit-content;`}
  `,
);

export const Row = styled(FlexItems)(
  ({ gap, left, right, top, bottom, wrap, between, responsive }) => css`
    gap: ${cssSize(gap ?? 2)};
    ${left && 'justify-content: flex-start;'}
    ${right && 'justify-content: flex-end;'}
    ${between && 'justify-content: space-between;'}
    ${top && 'align-items: flex-start;'}
    ${bottom && 'align-items: flex-end;'}
    ${wrap && 'flex-wrap: wrap;'}

    @media (max-width: ${screenSize.laptopS}px) {
      ${responsive && 'flex-direction: column;'}
      ${responsive && top && 'justify-content: flex-start;'}
      ${responsive && bottom && 'justify-content: flex-end;'}
      ${responsive && left && 'align-items: flex-start;'}
      ${responsive && right && 'align-items: flex-end;'}
      ${responsive === 'reverse-left' && 'flex-direction: column-reverse; align-items: flex-start;'}
    }
  `,
);

export const Column = styled(FlexItems)(
  ({ gap, left, right, top, bottom }) => css`
    flex-direction: column;
    gap: ${cssSize(gap ?? 2)};
    ${top && 'justify-content: flex-start;'}
    ${bottom && 'justify-content: flex-end;'}
    ${left && 'align-items: flex-start;'}
    ${right && 'align-items: flex-end;'}
  `,
);

export const Grid = styled.div<Props.CssProps>(
  ({ gap, rows, cols }) => css`
    width: 100%;
    display: grid;
    gap: ${cssSize(gap ?? 4)};
    grid-template-columns: repeat(${cols}, 1fr);
    grid-template-rows: repeat(${rows}, 1fr);

    @media (max-width: ${screenSize.laptopM}px) {
      grid-template-columns: 1fr;
    }
  `,
);
