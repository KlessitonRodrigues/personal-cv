import { Row } from 'src/lib/common/StyledComponents/Flex';

import { Option } from './styled';

type OptionListProps = {
  value?: string;
  options: {
    label: string;
    content: React.ReactNode;
    value?: string;
  }[];
  onSelect?: (value: string) => void;
};

const OptionList = (props: OptionListProps) => {
  const { options, value, onSelect } = props;

  return (
    <Row left gap={2} wrap>
      {options.map(option => (
        <Option
          key={option.label}
          data-active={option.value === value}
          onClick={() => onSelect?.(option.value || option.label)}
        >
          <div>{option.content}</div>
          <label>
            <b>{option.label}</b>
          </label>
        </Option>
      ))}
    </Row>
  );
};

export default OptionList;
