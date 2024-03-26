declare namespace Props {
  type CssProps = {
    active?: boolean;
    size?: number;
    gap?: number;
    mb?: number;
  };

  type Icons = {
    size?: number;
    onPress?: () => void;
    style?: React.CSSProperties;
    type: 'download' | 'selector' | 'spinner' | 'github' | 'template' | 'language';
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
