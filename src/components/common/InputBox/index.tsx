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
  value: string | number;
  paddingLeft?: number;
  readonly: boolean;
  paddingTop?: number;
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
  value,
  paddingTop,
  ...rest
}: InputBoxProps) => {
  const hasIcon = !!children;

  return (
    <S.InputWrapper {...rest}>
      <S.Input
        autocomplete="off"
        paddingLeft={paddingLeft}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        onChange={onChange}
        hasIcon={hasIcon}
        name={name}
        readOnly={readonly}
        value={value}
        paddingTop={paddingTop}
      />
      {children}
    </S.InputWrapper>
  );
};

export default InputBox;
