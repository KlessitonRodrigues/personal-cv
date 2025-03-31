import Icons from '../../Icons';
import { Row } from '../../StyledComponents/Flex';

type LineSelectorProps = {
  value: string;
  items: { value: string; label: string }[];
  onChange: (item: { value: string; label: string }) => void;
};

const LineSelector = (props: LineSelectorProps) => {
  const { value, items, onChange } = props;
  const index = items.findIndex(item => item.value === value);
  const item = items[index];

  const nextItem = () => {
    if (index + 1 < items.length) onChange?.(items[index + 1]);
    else onChange?.(items[0]);
  };

  const previousItem = () => {
    if (index - 1 >= 0) onChange?.(items[index - 1]);
    else onChange?.(items[items.length - 1]);
  };

  return (
    <Row gap={0}>
      <Row left onClick={previousItem}>
        <Icons type="caretLeft" size={6} />
      </Row>
      <label>{item?.label}</label>
      <Row right onClick={nextItem}>
        <Icons type="caretRight" size={6} />
      </Row>
    </Row>
  );
};

export default LineSelector;
