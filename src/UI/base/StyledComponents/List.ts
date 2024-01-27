import styled, { css } from 'styled-components';

export const List = styled.ul(
  ({ theme }) => css`
    padding-left: ${theme.size(6)};
  `,
);

export const ListItem = styled.li(
  ({ theme }) => css`
    list-style: none;
    position: relative;

    &::after {
      content: '';
      padding: 3px;
      border: 1px solid ${theme.colors.text3};
      border-radius: 50%;
      position: absolute;
      left: -15px;
      top: 6px;
    }
  `,
);
