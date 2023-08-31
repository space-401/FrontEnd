import styled from 'styled-components';

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

const Input = styled.input`
  background-color: #323339;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: ${(props) => props.height}px;
  border-radius: 10px;
  padding: 1rem;
`;

const S = {
  Input,
};
