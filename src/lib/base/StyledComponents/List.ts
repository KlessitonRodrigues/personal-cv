import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const List = styled.ul(
  ({ theme }) => css`
    list-style: none;
    padding-left: ${cssSize(5)};
    margin: ${cssSize(2)} 0;

    li {
      margin-bottom: ${cssSize(2)};
    }
  `,
);

export const ListItem = styled.li(
  ({ theme }) => css`
    list-style: none;
    position: relative;

    &::after {
      content: '';
      padding: 2px;
      border: 1px solid ${theme.colors.text1};
      background-color: ${theme.colors.text1};
      border-radius: 50%;
      position: absolute;
      left: -15px;
      top: 7px;
    }

    b {
      margin-right: ${cssSize(2)};
    }
  `,
);
