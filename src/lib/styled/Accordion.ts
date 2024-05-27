import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const AccordionContainer = styled.div<Props.CssProps>(
  ({ theme, active }) => css`
    width: 100%;
    border: ${theme.border.small};
    border-radius: ${theme.radius.small};
    padding: 0 ${cssSize(6)};
    cursor: pointer;

    ${AccordionHeader} {
      .icon {
        transition: transform 0.5s;
        ${active && 'transform: rotateZ(-90deg);'}
      }
    }

    ${AccordionContent} {
      ${active && `height: ${cssSize(100)};`}
    }
  `,
);

export const AccordionHeader = styled.div(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${cssSize(4)} 0;
  `,
);

export const AccordionContent = styled.div(
  () => css`
    height: 0;
    overflow: hidden;
    transition: 0.5s;
  `,
);
