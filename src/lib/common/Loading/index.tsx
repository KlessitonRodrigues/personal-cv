import { CgSpinner } from 'react-icons/cg';

import { Column } from 'src/lib/common/StyledComponents/Flex';
import { getText } from 'src/utils/i18n';

import If from '../If';
import { Container, FullScreen, LoadLine, Spinner, Title } from './styled';

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
