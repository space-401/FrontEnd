import S from '@/components/common/InputBox/style';

type InputBoxProps = {
  width?: number;
  height: number;
  placeholder?: string;
  type: 'text' | 'button' | 'password';
  backgroundColor?: string;
  maxLength?: number;
  disabled?: boolean;
};

const InputBox = ({
  type,
  placeholder,
  maxLength,
  disabled,
  ...rest
}: InputBoxProps) => {
  return (
    <S.InputWrapper {...rest}>
      <S.Input
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
      />
    </S.InputWrapper>
  );
};

export default InputBox;
