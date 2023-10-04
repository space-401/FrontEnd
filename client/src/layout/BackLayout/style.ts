import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLOR.black};
`;

const IconWrapper = styled.div`
  padding: 24px;
`;

const S = {
  Wrapper,
  IconWrapper,
};

export default S;
