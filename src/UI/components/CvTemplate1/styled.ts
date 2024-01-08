import { materialColors as mcolors } from "src/styles/lib/palettes";
import styled, { css } from "styled-components";

export const Container = styled.div(() => css``);

export const Header = styled.div(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.size(6)} ${theme.size(12)};
    background-color: ${mcolors.blueGrey["800"]};
    color: ${mcolors.grey["200"]};

    h1 {
      margin-bottom: ${theme.size(2)};
      color: ${mcolors.grey["100"]};
    }

    h3 {
      margin-bottom: ${theme.size(4)};
    }
  `
);

export const Body = styled.div(
  ({ theme }) => css`
    padding: ${theme.size(6)} ${theme.size(12)};
    background-color: ${mcolors.grey["50"]};
    color: ${mcolors.grey["800"]};
  `
);

export const Resume = styled.div(
  ({ theme }) => css`
    margin: ${theme.size(4)} 0;
  `
);

export const Title = styled.h4(
  ({ theme }) => css`
    margin: ${theme.size(4)} 0;
  `
);

export const Label = styled.div(
  ({ theme }) => css`
    display: inline-flex;
    gap: ${theme.size(2)};

    span {
      font-weight: bold;
    }

    a {
      text-decoration: underline;
    }
  `
);

export const Columns = styled.div<{ gap?: number; mb?: number }>(
  ({ theme, gap, mb }) => css`
    display: flex;
    gap: ${theme.size(gap)};
    margin-bottom: ${theme.size(mb)};
  `
);

export const Column = styled.div<{ gap?: number }>(
  ({ theme, gap }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.size(gap)};
  `
);

export const Dates = styled.div(
  ({ theme }) => css`
    width: ${theme.size(50)};
    font-size: ${theme.fontSize.small};
  `
);

export const List = styled.ul(
  ({ theme }) => css`
    list-style: disc inside;
    padding-left: ${theme.size(1)};
    margin: ${theme.size(2)} 0;

    li {
      margin-bottom: ${theme.size(1)};
    }
  `
);
