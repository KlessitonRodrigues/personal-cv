import { CgSpinner } from 'react-icons/cg';
import styled, { css } from 'styled-components';

import { animations, cssSize, gradients } from 'src/styles/styles.utils';
import { getText } from 'src/utils/utils.i18n';

import If from './common.if';
import { Column } from './styled/styled.flex';

const Container = styled.div(() => css``);

const FullScreen = styled.div(
  ({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0009;
    color: ${theme.colors.white};
    z-index: 5;
  `,
);

const Spinner = styled.div(
  () => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${cssSize(8)};
    animation: ${animations.spinning} 0.3s infinite linear;
  `,
);

const Title = styled.p(
  ({ theme }) => css`
    font-size: ${theme.fontSize.md};
    font-weight: bold;
  `,
);

const LoadLine = styled.div(
  () => css`
    width: 100%;
    height: ${cssSize(3)};
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    background-color: transparent;
    z-index: 3;

    &:before {
      content: '';
      position: absolute;
      left: 0%;
      height: ${cssSize(2)};
      width: 0%;
      border-radius: ${cssSize(1)};
      background-image: ${gradients.blueAndGreen};
      animation: ${animations.progress} 5s linear forwards;
    }
  `,
);

type ILoadingProps = {
  show: boolean;
  type: 'fullScreen' | 'icon' | 'line';
  title?: string;
  description?: string;
};

const Loading = (props: ILoadingProps) => {
  const { show, type, title } = props;

  return (
    <Container>
      <If check={show && type === 'line'}>
        <LoadLine />
      </If>

      <If check={show && type === 'icon'}>
        <Spinner>
          <CgSpinner size={32} />
        </Spinner>
      </If>

      <If check={show && type === 'fullScreen'}>
        <FullScreen>
          <Spinner>
            <CgSpinner size={32} />
          </Spinner>
          <Column gap={4}>
            <Title>{title || getText('loding_title')}</Title>
          </Column>
        </FullScreen>
      </If>
    </Container>
  );
};

export default Loading;
