import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-1']};
  width: 100%;
  max-width: 1856px;
  height: 920px;
  border-radius: 30px 30px 0 0;
  background: ${({ theme }) => theme.COLOR['gray-7']};
  padding: 26px 40px 0 40px;
`;

const S = {
  Wrapper,
};

export default S;
