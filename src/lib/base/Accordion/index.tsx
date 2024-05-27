import { useState } from 'react';

import { AccordionContainer, AccordionContent, AccordionHeader } from 'src/lib/styled/Accordion';
import { Hr } from 'src/lib/styled/Divisors';

import Icons from '../Icons';

const Accordion = () => {
  const [active, setActive] = useState(false);

  return (
    <AccordionContainer active={active} onClick={() => setActive(!active)}>
      <AccordionHeader>
        <h3>Accordion</h3>
        <Icons type="caretLeft" size={8} />
      </AccordionHeader>
      <AccordionContent>
        <Hr />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab placeat quibusdam, cum commodi
        cumque velit. Distinctio voluptatibus at dolore dolores nisi. Recusandae nam nesciunt minima
        alias, tempora eum velit quis?
      </AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
