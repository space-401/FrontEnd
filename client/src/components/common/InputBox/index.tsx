import S from './style';

type InputBoxProps = {
  width?: number;
  height: number;
  placeholder?: string;
  type: 'text' | 'button' | 'password';
  backgroundColor?: string;
  maxLength?: number;
};

const InputBox = ({ type, placeholder, maxLength, ...rest }: InputBoxProps) => {
  return (
    <S.InputWrapper {...rest}>
      <S.Input type={type} placeholder={placeholder} maxLength={maxLength} />
    </S.InputWrapper>
  );
};

export default InputBox;
