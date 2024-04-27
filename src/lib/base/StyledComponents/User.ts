import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const Avatar = styled.div<Props.CssProps>(
  ({ theme, src }) => css`
    display: flex;
    width: 100%;
    height: 100%;
    max-width: ${cssSize(30)};
    max-height: ${cssSize(45)};
    padding: ${cssSize(30)} ${cssSize(25)};
    border-radius: ${theme.radius.medium};
    background-image: url(${src});
    background-size: cover;
  `,
);
