import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-1']};
  width: 1856px;
  min-height: 520px;
  border-radius: 40px;
  background: ${({ theme }) => theme.COLOR['gray-5']};
`;

const S = {
  Wrapper,
};

export default S;
