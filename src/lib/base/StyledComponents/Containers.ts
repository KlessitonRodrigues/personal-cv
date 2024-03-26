import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const Page = styled.div(
  () => css`
    width: 100%;
    height: 100%;
  `,
);

export const PageContent = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    padding: ${cssSize(4)};
    background-color: ${theme.colors.bg4};
  `,
);
