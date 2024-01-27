import styled, { css } from 'styled-components';

export const List = styled.ul(
  ({ theme }) => css`
    list-style: none;
    padding-left: ${theme.size(5)};
    margin: ${theme.size(2)} 0;

    li {
      margin-bottom: ${theme.size(2)};
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
      border: 1px solid ${theme.colors.text3};
      background-color: ${theme.colors.text1};
      border-radius: 50%;
      position: absolute;
      left: -15px;
      top: 6px;
    }

    b {
      margin-right: ${theme.size(2)};
    }
  `,
);
