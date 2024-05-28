import { useState } from 'react';

import { AccordionContainer, AccordionContent, AccordionHeader } from 'src/lib/styled/Accordion';
import { Hr } from 'src/lib/styled/Divisors';

import Icons from '../Icons';

const Accordion = (props: Props.Accordion) => {
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
