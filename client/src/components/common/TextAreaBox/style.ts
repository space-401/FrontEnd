import styled from 'styled-components';

const Wrapper = styled.div<{
  backgroundColor?: string;
  width?: number;
  height: number;
}>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#323339'};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => height}px;
  border-radius: 10px;
  padding: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: inherit;
`;

const S = {
  Wrapper,
  TextArea,
};

export default S;
