declare namespace Props {
  type Icons = {
    size?: number;
    onPress?: () => void;
    type: "download" | "selector";
    style?: React.CSSProperties;
  };

  type Text = {
    textId?: string;
    children?: string;
  };
}
