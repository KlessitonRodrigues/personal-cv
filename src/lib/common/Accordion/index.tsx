import { useState } from 'react';

import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
} from 'src/lib/common/StyledComponents/Accordion';
import { Hr } from 'src/lib/common/StyledComponents/Divisors';

import Icons from '../Icons';

type IAccordionProps = {
  title: React.ReactElement;
  content: React.ReactElement;
};

const Accordion = (props: IAccordionProps) => {
  const { title, content } = props;
  const [active, setActive] = useState(false);

  return (
    <AccordionContainer active={active} onClick={() => setActive(!active)}>
      <AccordionHeader>
        {title}
        <Icons type="caretLeft" size={8} />
      </AccordionHeader>
      <AccordionContent>
        <Hr />
        {content}
      </AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
