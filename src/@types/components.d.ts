declare namespace Props {
  type Icons = {
    size?: number;
    onPress?: () => void;
    type: 'download' | 'selector' | 'spinner';
    style?: React.CSSProperties;
  };

  type Text = {
    path?: string;
  };

  type Loading = {
    show: boolean;
    type: 'fullScreen' | 'icon';
    title?: string;
    description?: string;
  };

  type If = {
    check: boolean;
    true?: React.ReactElement;
    false?: React.ReactElement;
    children?: React.ReactElement;
  };
}
