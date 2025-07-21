import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const List = styled.ol(
  () => css`
    list-style: none;
    padding-left: ${cssSize(6)};
    margin: ${cssSize(2)} 0;
  `,
);

export const ListItem = styled.li(
  ({ theme }) => css`
    list-style: none;
    position: relative;
    margin-bottom: ${cssSize(1)};

    &::after {
      content: '';
      padding: 2.5px;
      border: 1px solid ${theme.colors.text1};
      background-color: ${theme.colors.text1};
      border-radius: 50%;
      position: absolute;
      left: -18px;
      top: 7px;
    }
  `,
);

export const ListItemBox = styled(ListItem)(
  ({ theme }) => css`
    padding: ${cssSize(4)};
    border: ${theme.border.sm};
    border-radius: ${theme.radius.sm};

    &::after {
      display: none;
    }
  `,
);
