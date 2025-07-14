declare namespace Props {
  type CssProps = {
    active?: boolean;
    size?: number;
    gap?: number;
    w?: string | number;
    h?: string | number;
    maxw?: string;
    maxh?: string;
    p?: string;
    m?: string;
    mb?: number;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    wrap?: boolean;
    rows?: number;
    cols?: number;
    responsive?: boolean | 'reverse-left';
    reverse?: boolean;
    half?: boolean;
    src?: string;
    hidden?: boolean;
    full?: boolean;
    fit?: boolean;
    between?: boolean;
  };

  type Text = {
    path?: string;
    tag?: Utils.TextTags;
    children?: React.ReactNode;
  };

  type Loading = {
    show: boolean;
    type: 'fullScreen' | 'icon' | 'line';
    title?: string;
    description?: string;
  };

  type If = {
    check: boolean;
    true?: React.ReactElement;
    false?: React.ReactElement;
    children?: React.ReactNode;
  };

  type Accordion = {
    title: React.ReactElement;
    content: React.ReactElement;
    delayLoad?: boolean;
  };
}
