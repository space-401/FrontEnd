import S from './style';

type InputBoxProps = {
  width?: number;
  height: number;
  placeholder?: string;
  type?: string;
  backgroundColor?: string;
};

const InputBox = (props: InputBoxProps) => {
  const {
    type,
    placeholder,
    width,
    height,
    backgroundColor = '#323339',
  } = props;
  return (
    <S.InputWrapper
      width={width}
      height={height}
      backgroundColor={backgroundColor}
    >
      <S.Input type={type || 'text'} placeholder={placeholder} />
    </S.InputWrapper>
  );
};

export default InputBox;
