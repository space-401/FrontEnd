import styled from 'styled-components';

const Wrapper = styled.div<{
  backgroundColor?: string;
  width?: number;
  height: number;
}>`
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.COLOR['gray-4']};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => height}px;
  border-radius: 10px;
  padding: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: inherit;
  color: white;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};
`;

const S = {
  Wrapper,
  TextArea,
};

export default S;
