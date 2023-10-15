import styled from 'styled-components';

const Wrapper = styled.div<{
  backgroundColor?: string;
  width?: number;
  height: number;
}>`
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.COLOR['gray-5']};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => height}px;
  border-radius: 10px;
  padding: 1rem;
  position: relative;
`;

const TextArea = styled.textarea`
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  width: 100%;
  height: 100%;
  background-color: inherit;
  color: white;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};
`;

const ChildrenWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 10px;
`;

const S = {
  Wrapper,
  TextArea,
  ChildrenWrapper,
};

export default S;
