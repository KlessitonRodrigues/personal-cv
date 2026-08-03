import { useState } from 'react';

import Icons from './common.icons';
import { AccordionContainer, AccordionContent, AccordionHeader } from './styled/styled.accordion';
import { Hr } from './styled/styled.divisors';

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
        <Icons type="caretRight" size={7} />
        {title}
      </AccordionHeader>
      <AccordionContent>
        <Hr />
        {content}
      </AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
