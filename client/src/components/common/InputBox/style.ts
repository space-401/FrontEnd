import styled from 'styled-components';

const InputWrapper = styled.div<{
  width?: number;
  height: number;
  placeholder?: string;
  backgroundColor?: string;
}>`
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.COLOR['gray-6']};
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: ${({ height }) => height}px;
  border-radius: 10px;
  padding: 1rem;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: inherit;
  color: white;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};
`;

const S = {
  InputWrapper,
  Input,
};

export default S;
