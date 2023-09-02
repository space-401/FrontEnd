import S from './style';

export type TextAreaBoxProps = {
  width?: number;
  height: number;
  placeholder?: string;
  backgroundColor?: string;
};

const TextAreaBox = (props: TextAreaBoxProps) => {
  const { placeholder, ...rest } = props;
  return (
    <S.Wrapper {...rest} placeholder={placeholder}>
      <S.TextArea placeholder={placeholder} />
    </S.Wrapper>
  );
};

export default TextAreaBox;
