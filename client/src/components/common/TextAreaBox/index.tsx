import S from './style';

export type TextAreaBoxProps = {
  width?: number;
  height: number;
  placeholder?: string;
  backgroundColor?: string;
  maxLength: number;
};

const TextAreaBox = (props: TextAreaBoxProps) => {
  const { placeholder, maxLength, ...rest } = props;
  return (
    <S.Wrapper {...rest}>
      <S.TextArea placeholder={placeholder} maxLength={maxLength} />
    </S.Wrapper>
  );
};

export default TextAreaBox;
