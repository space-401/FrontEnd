import S from '@/components/common/InputBox/style';
import { ReactElement } from 'react';

type InputBoxProps = {
  width?: number;
  height: number;
  placeholder?: string;
  type: 'text' | 'button' | 'password';
  backgroundColor?: string;
  maxLength?: number;
  disabled?: boolean;
  children?: ReactElement;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  value?: string;
  paddingLeft?: number;
  readonly: boolean;
};

const InputBox = ({
  type,
  placeholder,
  maxLength,
  disabled,
  children,
  onChange,
  name,
  paddingLeft,
  readonly,

  ...rest
}: InputBoxProps) => {
  const hasIcon = children ? true : false;

  return (
    <S.InputWrapper {...rest}>
      <S.Input
        paddingLeft={paddingLeft}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        onChange={onChange}
        hasIcon={hasIcon}
        name={name}
        readOnly={readonly}
      />
      {children}
    </S.InputWrapper>
  );
};

export default InputBox;
