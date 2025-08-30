type IConditionalProps = {
  check: boolean;
  true?: React.ReactElement;
  false?: React.ReactElement;
  children?: React.ReactNode;
};

const If = (props: IConditionalProps) => (props.check ? props.true || props.children : props.false);

export default If;
