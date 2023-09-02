import S from './style';

type InputBoxProps = {
  width?: number;
  height: number;
  placeholder?: string;
  type?: string;
  backgroundColor?: string;
};

const InputBox = ({ type, placeholder, ...props }: InputBoxProps) => {
  return (
    <S.InputWrapper {...props}>
      <S.Input type={type || 'text'} placeholder={placeholder} />
    </S.InputWrapper>
  );
};

export default InputBox;
