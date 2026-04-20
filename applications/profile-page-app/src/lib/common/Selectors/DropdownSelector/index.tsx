import { useEffect, useMemo, useRef, useState } from 'react';

import Icons from '../../Icons';
import {
  SelectBox,
  SelectItemsList,
  SelectListItem,
  SelectTitle,
  SelectTrigger,
} from '../../StyledComponents/Select';

type DropdownItem = {
  value: string;
  label: string;
};

type DropdownSelectorProps = {
  title?: string;
  value: string;
  items: DropdownItem[];
  onChange?: (item: DropdownItem) => void;
  disabled?: boolean;
};

const DropdownSelector = (props: DropdownSelectorProps) => {
  const { title, value, items, onChange, disabled } = props;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLabelElement>(null);

  const currentItem = useMemo(
    () => items.find(item => item.value === value) ?? items[0],
    [items, value],
  );

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleSelect = (item: DropdownItem) => {
    onChange?.(item);
    setOpen(false);
  };

  return (
    <SelectBox ref={ref}>
      {title && <SelectTitle>{title}</SelectTitle>}
      <SelectTrigger
        type="button"
        aria-expanded={open}
        onClick={() => !disabled && setOpen(prev => !prev)}
        disabled={disabled}
      >
        {currentItem?.label}
        <Icons type="selector" size={6} />
      </SelectTrigger>
      <SelectItemsList open={open}>
        {items.map(item => (
          <SelectListItem
            key={item.value}
            active={item.value === currentItem?.value}
            onClick={() => handleSelect(item)}
          >
            {item.label}
          </SelectListItem>
        ))}
      </SelectItemsList>
    </SelectBox>
  );
};

export default DropdownSelector;
