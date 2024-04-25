declare namespace Props {
  type CssProps = {
    active?: boolean;
    size?: number;
    gap?: number;
    mb?: number;
    w?: string;
    h?: string;
    p?: string;
    m?: string;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    wrap?: boolean;
    rows?: number;
    cols?: number;
    responsive?: boolean;
  };

  type Icons = {
    size?: number;
    onPress?: () => void;
    style?: React.CSSProperties;
    type:
      | 'download'
      | 'selector'
      | 'spinner'
      | 'github'
      | 'template'
      | 'language'
      | 'link'
      | 'textDocument'
      | 'image'
      | 'user'
      | 'theme';
  };

  type Text = {
    path: string;
    tag?:
      | 'b'
      | 'span'
      | 'small'
      | 'strong'
      | 'mark'
      | 'p'
      | 'h1'
      | 'h2'
      | 'h3'
      | 'h4'
      | 'h5'
      | 'h6';
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
