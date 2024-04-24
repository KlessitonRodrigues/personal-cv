import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const Row = styled.div<Props.CssProps>(
  ({ gap }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${cssSize(gap ?? 2)};
  `,
);

export const RowLeft = styled(Row)`
  justify-content: flex-start;
`;

export const RowRight = styled(Row)`
  justify-content: flex-start;
`;

export const RowWrap = styled(Row)`
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const Column = styled(Row)`
  flex-direction: column;
  justify-content: flex-start;
`;

export const ColumnLeft = styled(Column)`
  align-items: flex-start;
`;

export const ColumnRight = styled(Column)`
  align-items: flex-end;
`;
