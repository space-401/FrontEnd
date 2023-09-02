import styled from 'styled-components';

const InputWrapper = styled.div<{
  width?: number;
  height: number;
  placeholder?: string;
  backgroundColor?: string;
}>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#323339'};
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: ${({ height }) => height}px;
  border-radius: 10px;
  padding: 1rem;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: inherit;
`;

const S = {
  InputWrapper,
  Input,
};

export default S;
