import S from './style';

type InputBoxProps = {
  width?: number;
  height: number;
  placeholder?: string;
  type?: string;
};

const InputBox = (props: InputBoxProps) => {
  const { placeholder, width, height, type } = props;

  return (
    <S.Input
      type={type || 'text'}
      placeholder={placeholder}
      width={width}
      height={height}
    ></S.Input>
  );
};

export default InputBox;
