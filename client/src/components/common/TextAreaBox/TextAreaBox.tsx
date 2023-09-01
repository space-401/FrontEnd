import S from './style';

export type TextAreaBoxProps = {
  width?: number;
  height: number;
  placeholder?: string;
  type?: string;
};

const TextAreaBox = (props: TextAreaBoxProps) => {
  const { placeholder, width, height } = props;
  return <S.Wrapper placeholder={placeholder} width={width} height={height} />;
};

export default TextAreaBox;
