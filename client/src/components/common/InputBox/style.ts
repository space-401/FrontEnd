import styled from 'styled-components';

interface IInputWrapper {
  width?: number;
  height: number;
  placeholder?: string;
  backgroundColor?: string;
}

const InputWrapper = styled.div<IInputWrapper>`
  display: flex;
  align-items: center;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.COLOR['gray-5']};
  width: ${({ width }) => width}px;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
`;

interface IInput {
  paddingLeft?: number;
  hasIcon: boolean;
  readOnly: boolean;
}

const Input = styled.input<IInput>`
  width: ${({ hasIcon, paddingLeft }) =>
    hasIcon && !paddingLeft
      ? `calc(100% - 24px)`
      : hasIcon && paddingLeft
      ? `calc(100% - ${paddingLeft}px)`
      : '100%'};
  height: 100%;
  background-color: inherit;
  color: white;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};
  cursor: ${({ readOnly }) => (readOnly ? 'pointer' : 'auto')};
  &:hover {
    cursor: ${({ readOnly }) => (readOnly ? 'pointer' : 'auto')};
  }
`;

const S = {
  InputWrapper,
  Input,
};

export default S;
