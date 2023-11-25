import { ReactElement } from 'react';
import S from './style';

export type TextAreaBoxProps = {
  width?: number;
  height: number;
  placeholder?: string;
  backgroundColor?: string;
  maxLength: number;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  name: string;
  children?: ReactElement;
  value: string;
};

export const TextAreaBox = (props: TextAreaBoxProps) => {
  const { value, placeholder, maxLength, onChange, name, children, ...rest } =
    props;
  return (
    <S.Wrapper {...rest}>
      <S.TextArea
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        name={name}
        value={value}
      />
      <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
    </S.Wrapper>
  );
};
