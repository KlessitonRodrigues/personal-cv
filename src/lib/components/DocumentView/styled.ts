import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const Container = styled.div(
  () => css`
    position: relative;
    width: 100%;
    margin: auto;
  `,
);

export const Document = styled.div(() => css``);

export const Content = styled.div(
  () => css`
    padding: 0 ${cssSize(6)};
  `,
);

export const DocumentButtons = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    left: 99%;
    color: ${theme.colors.text1};
    font-size: ${theme.fontSize.verySmall};
  `,
);
