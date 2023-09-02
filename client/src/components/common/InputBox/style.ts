import styled from 'styled-components';

interface IInputWrapper {
  backgroundColor: string;
  width?: number;
  height: number;
}

const InputWrapper = styled.div<IInputWrapper>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
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
