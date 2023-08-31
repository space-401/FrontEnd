import styled from 'styled-components';

type TextAreaBoxProps = {
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

const Wrapper = styled.textarea<TextAreaBoxProps>`
  background-color: #323339;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: ${(props) => props.height}px;
  border-radius: 10px;
  padding: 1rem;
`;

const S = {
  Wrapper,
};
