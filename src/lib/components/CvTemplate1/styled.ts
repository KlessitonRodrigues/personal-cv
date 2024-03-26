import styled, { css } from 'styled-components';

import { materialColors as mcolors } from 'src/styles/colors';
import { cssSize } from 'src/styles/utils';

export const Container = styled.div(() => css``);

export const Header = styled.div(
  () => css`
    width: 100%;
    padding: ${cssSize(6)} ${cssSize(12)};
    background-color: ${mcolors.blueGrey['800']};
    color: ${mcolors.grey['200']};

    h1 {
      margin-bottom: ${cssSize(2)};
      color: ${mcolors.grey['100']};
    }

    h3 {
      margin-bottom: ${cssSize(4)};
    }
  `,
);

export const Body = styled.div(
  () => css`
    padding: ${cssSize(6)} ${cssSize(12)};
    background-color: ${mcolors.grey['50']};
    color: ${mcolors.grey['800']};
  `,
);

export const Resume = styled.div(
  () => css`
    margin: ${cssSize(4)} 0;
  `,
);

export const Title = styled.h4(
  () => css`
    margin-bottom: ${cssSize(2)};
  `,
);

export const SubTitle = styled.div(
  ({ theme }) => css`
    width: ${cssSize(45)};
    margin-top: ${cssSize(0.75)};
    font-size: ${theme.fontSize.small};
  `,
);

export const Label = styled.span(
  () => css`
    b {
      margin-right: ${cssSize(2)};
    }
  `,
);

export const Columns = styled.div<Props.CssProps>(
  ({ gap, mb }) => css`
    display: flex;
    gap: ${cssSize(gap || 4)};
    margin-bottom: ${cssSize(mb || 2)};
  `,
);

export const Column = styled.div<Props.CssProps>(
  ({ gap }) => css`
    display: flex;
    flex-direction: column;
    gap: ${cssSize(gap || 4)};
  `,
);

export const Dates = styled.div(
  ({ theme }) => css`
    width: ${cssSize(45)};
    font-size: ${theme.fontSize.verySmall};
    margin-top: ${cssSize(0.75)};
  `,
);
