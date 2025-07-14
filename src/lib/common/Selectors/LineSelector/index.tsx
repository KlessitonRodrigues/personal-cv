import Icons from '../../Icons';
import { OutlineBtnTransparent } from '../../StyledComponents/Buttons';
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
      <OutlineBtnTransparent onClick={previousItem}>
        <Icons type="caretLeft" size={6} />
      </OutlineBtnTransparent>
      <Row>{item?.label}</Row>
      <OutlineBtnTransparent right onClick={nextItem}>
        <Icons type="caretRight" size={6} />
      </OutlineBtnTransparent>
    </Row>
  );
};

export default LineSelector;
