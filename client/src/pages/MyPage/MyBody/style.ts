import styled from 'styled-components';

const Container = styled.section`
  width: calc(100% - 310px);
  height: 100%;
  background: ${({ theme }) => theme.COLOR['gray-6']};
  border-radius: 30px;
  padding: 80px 150px 42px;
`;

const S = {
  Container,
};

export default S;
