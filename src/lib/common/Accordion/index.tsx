import { useState } from 'react';

import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
} from 'src/lib/common/StyledComponents/Accordion';
import { Hr } from 'src/lib/common/StyledComponents/Divisors';

import Icons from '../Icons';
import If from '../If';

type IAccordionProps = {
  title: React.ReactElement;
  content: React.ReactElement;
  delayLoad?: boolean;
};

const Accordion = (props: IAccordionProps) => {
  const { title, content, delayLoad } = props;
  const [active, setActive] = useState(false);
  const [delay, setDelay] = useState(!!delayLoad);

  return (
    <AccordionContainer
      active={active}
      onClick={() => setActive(!active)}
      onMouseEnter={() => delay && setDelay(false)}
    >
      <AccordionHeader>
        {title}
        <Icons type="caretLeft" size={8} />
      </AccordionHeader>
      <AccordionContent>
        <Hr />
        <If check={!delay}>{content}</If>
      </AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
