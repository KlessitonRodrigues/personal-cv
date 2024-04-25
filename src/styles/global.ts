import { createGlobalStyle, css } from 'styled-components';

import '../lib/assets/fonts/roboto500.ttf';
import '../lib/assets/fonts/roboto700.ttf';
import { cssSize } from './utils';

export default createGlobalStyle(
  ({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    html {
      font-size: 16px;
    }
    body {
      font-size: ${theme.fontSize.body};
      min-height: 100vh;
    }
    html,
    body {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      background-color: ${theme.colors.bg4};
      color: ${theme.colors.text4};
    }
    h1 {
      font-size: ${theme.fontSize.h1};
      font-weight: bolder;
    }
    h2 {
      font-size: ${theme.fontSize.h2};
      font-weight: bolder;
    }
    h3 {
      font-size: ${theme.fontSize.h3};
      font-weight: bolder;
    }
    h4 {
      font-size: ${theme.fontSize.h4};
    }
    h5 {
      font-size: ${theme.fontSize.h5};
    }
    h6 {
      font-size: ${theme.fontSize.h6};
    }
    p {
      font-size: ${theme.fontSize.body};
    }
    ul {
      list-style: none;
    }
    a {
      color: unset;
      text-decoration: underline;
    }
    b,
    small,
    mark {
      color: ${theme.colors.main};
      font-weight: bold;
    }
    mark {
      font-size: ${theme.fontSize.small};
    }
    small {
      font-size: ${theme.fontSize.verySmall};
    }
    label > b {
      font-size: ${theme.fontSize.label};
    }
    button,
    select {
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      min-height: ${cssSize(9)};
      display: flex;
      align-items: center;
      gap: ${cssSize(1)};
      padding: 0 ${cssSize(2)};
      background-color: transparent;
      outline: none;
      border: none;
      border-radius: ${theme.radius.small};
      cursor: pointer;
    }
    div::-webkit-scrollbar {
      width: ${cssSize(3)};
    }
    div::-webkit-scrollbar-track {
      background: #0000;
    }
    div::-webkit-scrollbar-thumb {
      background: ${theme.colors.gray};
      border-radius: 2px;
    }
    div::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.main};
    }
    #root {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  `,
);
