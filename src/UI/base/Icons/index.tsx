import { iconMap } from "./services/iconMap";
import { Container } from "./styled";

const Icons = (props: Props.Icons) => {
  const { type, size, style, onPress } = props;
  return (
    <Container className="icon" size={size} style={style} onClick={onPress}>
      {iconMap[type]}
    </Container>
  );
};

export default Icons;
